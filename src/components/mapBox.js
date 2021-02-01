import React, {Component} from 'react';
import InfoWindowEx from "../components/infoWindowEx"
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import './mapBox.styles.css'
class MapBox extends Component {
  constructor() {
    super()
    this.state = {
      centerLat: 39.8283,
      centerLong:  -98.5795,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  markers = () => {
    return this.props.filteredResorts.map(resort => {
      return <Marker key={resort.id} position={{lat: resort.attributes.lat, lng: resort.attributes.long}}
      clickable={true} resort={resort} title={resort.attributes.name} onClick={this.onMarkerClick}
    />  
  })}

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    let slug =  this.state.selectedPlace.resort? this.state.selectedPlace.resort.attributes.name.split(" ").join("_") : ""

    return (
      <div className="map-box">
        <Map google={this.props.google}   
        zoom={this.props.zoom} 
        style={{
          width: "100%",
          height: "100%"
        }}
        containerStyle={{
          position: 'fixed',
          right: "10px" ,
          width: '50%',
          height: '80vh',
          top: "150px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "gray"
        }}
        // initialCenter={{lat: this.props.centerLat, lng: this.props.centerLong}}
        center={{lat: this.props.centerLat, lng: this.props.centerLong}}
        >

          {this.markers()}

          <InfoWindowEx
           marker={this.state.activeMarker}
           visible={this.state.showingInfoWindow}
           onClose={this.onClose}> 
            <div className="map-info">
              <h4>{this.state.selectedPlace.title} 
              </h4> 
             {this.state.selectedPlace.resort? this.state.selectedPlace.resort.attributes.short_desc : ""}
             <a className="info-btn" href={`/resorts/${slug}`}> Learn More </a>            
             </div>
           </InfoWindowEx>
          
        </Map>
      </div>
    )
  }
} 

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS
})(MapBox);