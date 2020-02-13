import React from 'react';
import {connect} from 'react-redux'
import Review from '../components/review'


function ReviewList(props) {

    let mappedReviews = () => {
        if (!props.loading && props.reviews) {
            return props.reviews.map(review => {
                return <Review review={review} key={review.id}/>
        })}
        else {
            return "loading..."

        }
       
    }



    return (

        <div className="reviewList"> 
        <h3>Reviews </h3>
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