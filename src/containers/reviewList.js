import React from 'react';
import {connect} from 'react-redux'
import Review from '../components/review'


function ReviewList(props) {

    return (
        <div> Review List!
            <Review/>
        </div>
    )
}
   
function mapStateToProps(state){
    return {currentUser: state.currentUser}
}
   

export default connect(mapStateToProps)(ReviewList)