import React from 'react';
import {connect} from 'react-redux'


function ProfilePage(props) {

    return (
        <div></div>
    )
}
   
function mapStateToProps(state){
    return {currentUser: state.currentUser}
}
   

export default connect(mapStateToProps)(profilePage)