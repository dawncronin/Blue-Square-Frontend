import React from 'react';
import {connect} from 'react-redux'
import Review from '../components/review'

import './reviewList.styles.css'

function ReviewList(props) {

    let mappedReviews = () => {
        if (!props.loading && props.reviews) {
            if (props.reviews.length === 0) {
                return <h4 className="no-reviews"> Be the first to write a review</h4>
            }
            return props.reviews.map(review => {
                return <Review review={review} key={review.id}/>
        })}
        else {
            return "loading..."

        }
    }

    return (
        <div className="review-list"> 
        <h2>Reviews </h2>
            {mappedReviews()}
        </div>
    )
}
   
function mapStateToProps(state){
    return {currentUser: state.userReducer.currentUser,
    reviews: state.reviewsReducer.reviews,
    loading: state.reviewsReducer.loadingReviews}
}
   

export default connect(mapStateToProps)(ReviewList)