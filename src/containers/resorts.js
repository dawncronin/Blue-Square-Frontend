import React from 'react';
import {connect} from 'react-redux'


function Resorts(props) {

    return (
        <div> Resorts!</div>
    )
}
   
function mapStateToProps(state){
    return {currentUser: state.currentUser}
}
   

export default connect(mapStateToProps)(Resorts)