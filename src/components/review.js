import React from 'react';
import {connect} from 'react-redux'

function Review(props) {

    return (
        <div className="review">
            {props.review.attributes.text} <br/>
            {props.review.attributes.rating} Stars <br/>
        </div>
    )
}
   
function mapStateToProps(state){
    return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Review)