import React, {Component} from 'react';
import googleMapsKey from "../secrets.js"
import InfoWindowEx from "../components/infoWindowEx"
import { useHistory } from 'react-router-dom';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';


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
      return <Marker position={{lat: resort.attributes.lat, lng: resort.attributes.long}}
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

  visitResort = (event) => {
    let history = useHistory()
    let slug =  this.state.selectedPlace.resort.attributes.name.split(" ").join("_")
    history.push(`/resorts/${slug}`)

  }

  render() {

    let slug =  this.state.selectedPlace.resort? this.state.selectedPlace.resort.attributes.name.split(" ").join("_") : ""



    return (
      <div className="mapBox">
        <Map google={this.props.google}   
        zoom={4} 
        style={{
          width: "100%",
          height: "90%"
        }}
        containerStyle={{
          position: 'fixed',  
          width: '45%',
          height: '100%',
          top: "10%"
        }}
        initialCenter={{lat: this.state.centerLat, lng: this.state.centerLong}}
        >

          {this.markers()}

          <InfoWindowEx
           marker={this.state.activeMarker}
           visible={this.state.showingInfoWindow}
           onClose={this.onClose}> 
            <div>
              <h4>{this.state.selectedPlace.title} 
              <button onClick={() => {
                window.location.href=`/resorts/${slug}`             
              }}>View Resort</button>
              </h4> 
             {this.state.selectedPlace.resort? this.state.selectedPlace.resort.attributes.short_desc : ""}
            
             </div>
           </InfoWindowEx>
          
        </Map>
      </div>
    )
  }
} 

export default GoogleApiWrapper({
  apiKey: googleMapsKey
})(MapBox);