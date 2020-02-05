import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getResort} from "../actions/resortActions"
import {getReviews} from "../actions/reviewActions"

import AddReview from "../components/addReview"
import ReviewList from "../containers/reviewList"

class ResortPage extends Component {

    componentDidMount() {
        this.props.getResort(this.props.match.params.resortName)
        this.props.getReviews(this.props.match.params.resortName)
    }
   
    render() {
        return (
            <div>
               <p> {this.props.currentResort.attributes? this.props.currentResort.attributes.name: "loading"}</p>
               <AddReview/>
               <ReviewList/>
            </div>
        )
        } 
}
   
function mapDispatchToProps(dispatch){
    return {getResort: (resortName) => {dispatch(getResort(resortName))},
        getReviews: (resortName) => {dispatch(getReviews(resortName))}
    
    }
}

function mapStateToProps(state){
    return {currentResort: state.resortsReducer.currentResort,
    reviews: state.reviewsReducer.reviews}
}
  
  export default connect(mapStateToProps, mapDispatchToProps) (ResortPage) 
  