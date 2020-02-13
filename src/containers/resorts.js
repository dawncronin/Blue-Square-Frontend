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
            begineer: false,
            sort: "none"
        }
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    componentWillReceiveProps(props) {
        this.setState({filteredResorts: props.resorts})
    }

    onFilterChange = (filter) => {
        this.setState({...filter}, () => {
            this.addFilters()
        })
    }

    onBegineerChecked = () => {
        this.setState({begineer: !this.state.begineer}, () => {
            this.addFilters()
        })
    }

    addFilters = () => {
       let ikon =  this.state.skipass === "ikon" ? true : false
       let epic =  this.state.skipass === "epic" ? true : false
       let price = parseInt(this.state.price, 10)

       let resorts = this.props.resorts.filter(resort => parseInt(resort.attributes.price, 10) < price)
       if (this.state.region !== "none") {
           resorts = resorts.filter( resort => resort.attributes.region === this.state.region)
       }
       if (ikon) {
           resorts = resorts.filter( resort => resort.attributes.ikon)
       }
       if (epic) {
           resorts = resorts.filter( resort => resort.attributes.epic)
        }
        if (this.state.begineer) {
            resorts = resorts.filter( resort => resort.attributes.begineer)
        }

        

       this.setState({ filteredResorts: resorts}, () => {
           this.onSortChange(this.state.sort)
       })
    }

    onSortChange = (value) => {
        let array = [...this.state.filteredResorts]
        let sorted = array
        switch (value) {
            case "lifts" : {
                    sorted = array.sort((a, b) => b.attributes.lifts - a.attributes.lifts )
                    break
                }  
            case "runs" : {
                sorted = array.sort((a, b) => b.attributes.runs - a.attributes.runs )
                break
            } 
            case "green" : {
                sorted = array.sort((a, b) => b.attributes.green - a.attributes.green )
                break
            } 
            case "blue" : {
                sorted = array.sort((a, b) => b.attributes.blue - a.attributes.blue )
                break
            } 
            case "black" : {
                sorted = array.sort((a, b) => b.attributes.black - a.attributes.black )
                break
            } 
            case "double_black" : {
                sorted = array.sort((a, b) => b.attributes.double_black - a.attributes.double_black )
                break
            } 
            case "vertical" : {
                sorted = array.sort((a, b) => b.attributes.vertical - a.attributes.vertical )
                break
            } 
            case "summit" : {
                sorted = array.sort((a, b) => b.attributes.summit - a.attributes.summit )
                break
            } 
            case "snowfall" : {
                sorted = array.sort((a, b) => b.attributes.snowfall - a.attributes.snowfall )
                break
            } 
            case "acres" : {
                sorted = array.sort((a, b) => b.attributes.acres - a.attributes.acres )
                break
            } 
            case "terrain_parks" : {
                sorted = array.sort((a, b) => b.attributes.terrain_parks - a.attributes.terrain_parks )
                break
            } 
        }
        this.setState({filteredResorts: sorted})
    }

    render() {
        console.log(this.props)
        console.log(this.state)
    return (
        <div className="resorts"> 
        <Filter onFilterChange={this.onFilterChange} onBegineerChecked={this.onBegineerChecked} onSortChange={this.onSortChange}/>
        <ResortsList filteredResorts={this.props.loadingResorts? [] : this.state.filteredResorts} />
        <MapBox filteredResorts={this.state.filteredResorts} />
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