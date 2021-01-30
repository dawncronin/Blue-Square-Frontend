import React from 'react';
import {connect} from 'react-redux'

import './review.styles.css'

function Review(props) {

    let stars = () => {
        console.log(props.review.attributes.rating)
        if (props.review.attributes.rating === 1){
            return <div className="star"> 
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
            </div>
        }
        else if (props.review.attributes.rating === 2) {
            return <div className="star" > 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
            </div>
        }
        else if (props.review.attributes.rating === 3) {
            return <div className="star"> 
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
            </div>
        }
        else if (props.review.attributes.rating === 4) {
            return <div className="star"> 
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>

            </div>
        }
        else if (props.review.attributes.rating === 5) {
            return <div className="star"> 
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
            </div>
        }

    }

    return (
        <div className="review">
            <div className="reviewer"> {props.review.attributes.user.username} </div>
            <div className="review-stars">{stars()}</div>
            <p>{props.review.attributes.text} </p>
        </div>
    )
}
   
function mapStateToProps(state){
    return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Review)