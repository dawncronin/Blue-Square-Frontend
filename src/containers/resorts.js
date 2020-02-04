import React, {Component} from 'react';
import {connect} from 'react-redux'
import Filter from "../components/filter"
import MapBox from "../components/mapBox"
import ResortsList from "../containers/resortsList"

class Resorts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredResorts: this.props.resorts,
            price: "220",
            rating: 1,
            region: "none",
            skipass: "none",
            begineers: false,
            sort: "none"
        }
    }

    componentWillReceiveProps(props) {
        this.setState({filteredResorts: props.resorts})
    }

    onFilterChange = (filter) => {
        this.setState({...filter}, () => {
            this.addFilters()
        })
    }

    addFilters = () => {
       let ikon =  this.state.skipass === "ikon" ? true : false
       let epic =  this.state.skipass === "epic" ? true : false
       let price = parseInt(this.state.price, 10)

       let resorts = this.props.resorts.filter(resort => parseInt(resort.attributes.price, 10) < price)
       resorts = resorts.filter( resort => this.state.region === "none" || resort.attributes.region === this.state.region)
       if (ikon) {
           resorts = resorts.filter( resort => resort.attributes.ikon)
       }
       if (epic) {
           resorts = resorts.filter( resort => resort.attributes.epic)
        }
        if (this.state.begineers) {
            resorts = resorts.filter( resort => resort.attributes.begineers)
        }

        // if (this.state.sort !== "none") {
        //     switch (this.state.sort){
        //         case "snowfall"
        //     }

        // }

       this.setState({ filteredResorts: resorts})

    }

     

    



    render() {
    return (
        <div className="resorts"> 
        <Filter onFilterChange={this.onFilterChange}/>
        <ResortsList filteredResorts={this.props.loadingResorts? [] : this.state.filteredResorts} />
        {/* <MapBox filteredResorts={this.state.filteredResorts} /> */}
        </div>
    )
    }
}

   
function mapStateToProps(state){
    return {resorts: state.resortsReducer.resorts,
    loading: state.resortsReducer.loadingResorts
    }
}
   

export default connect(mapStateToProps)(Resorts)