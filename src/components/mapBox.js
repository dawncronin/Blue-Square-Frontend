import React from 'react';
import {connect} from 'react-redux'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import googleMapsKey from "../secrets.js"
import { InfoWindow } from '@react-google-maps/api';



function MapBox(props) {

    return (
        <LoadScript id="script-loader" googleMapsApiKey={googleMapsKey} >
        <GoogleMap id='example-map'   mapContainerStyle={{ height: "400px", width: "800px"}}
    zoom={7} center={{lat: -3.745, lng: -38.523}}>
          {/* ...Your map components */}
        </GoogleMap>
      </LoadScript>
    )
}
   
function mapStateToProps(state){
    return {resorts: state.currentUser}
}
   

export default connect(mapStateToProps)(MapBox)