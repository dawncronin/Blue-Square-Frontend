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
            sort: "none",
            centerLat: 39.8283,
            centerLong: -98.5795,
            zoom: 4
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

        let lats = resorts.map(resort => resort.attributes.lat)
        let longs = resorts.map(resort=> resort.attributes.long)
        let maxLat = Math.max(...lats)
        let maxLong = Math.max(...longs)
        let minLat = Math.min(...lats)
        let minLong = Math.min(...longs)


        let centerLat = (maxLat + minLat)/2
        let centerLong = (maxLong + minLong)/2

        let zoom = 4
        if (centerLat && centerLong) {
            let difLat = (maxLat - minLat)
            let difLong = (maxLong - minLong)

            console.log(difLong, difLat)

            if ( difLong > 40) {
                zoom = 4
            }
            else if ( difLong > 6 || difLat > 6) {
                zoom = 5
            }
            else if (difLong > 5 || difLong > 5) {
                zoom = 6
            }
            else if (difLong > 4 || difLong > 4) {
                zoom = 7
            }
            else if (difLong > 1 || difLong > 1) {
                zoom = 7
            }
            else if (difLong > 0.01) {
                zoom = 9
            }
            else {
                zoom = 14
            }
        }
        else {
            centerLat = this.state.centerLat
            centerLong = this.state.centerLong
        }

    
       this.setState({ filteredResorts: resorts,
            centerLat: centerLat,
            centerLong: centerLong,
            zoom: zoom
    }, () => {
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

    return (
        <div className="resorts"> 
        <Filter onFilterChange={this.onFilterChange} onBegineerChecked={this.onBegineerChecked} onSortChange={this.onSortChange}/>
        <ResortsList filteredResorts={this.props.loadingResorts? [] : this.state.filteredResorts} />
        <MapBox filteredResorts={this.state.filteredResorts} 
            centerLat={this.state.centerLat} 
            centerLong={this.state.centerLong} 
            zoom={this.state.zoom}
            />
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