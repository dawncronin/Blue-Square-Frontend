import React from 'react';
import {connect} from 'react-redux'
import star from "../star.png"

function Review(props) {

    let stars = () => {
        if (props.review.attributes.rating === 1){
            return <div className="star"> <img src={star} height={20} alt="star"/></div>
        }
        else if (props.review.attributes.rating === 2) {
            return <div className="star" > <img src={star} height={20} alt="star"/>
             <img src={star} height={20} alt="star"/>
            </div>
        }
        else if (props.review.attributes.rating === 3) {
            return <div className="star"> <img src={star} height={20} alt="star"/>
             <img src={star} height={20} alt="star"/>
             <img src={star} height={20} alt="star"/>
            </div>
        }
        else if (props.review.attributes.rating === 4) {
            return <div className="star"> <img src={star} height={20} alt="star"/>
             <img src={star} height={20} alt="star"/>
             <img src={star} height={20} alt="star"/>
             <img src={star} height={20} alt="star"/>
            </div>
        }
        else if (props.review.attributes.rating === 5) {
            return <div className="star"> <img src={star} height={20} alt="star"/>
             <img src={star} height={20} alt="star"/>
             <img src={star} height={20} alt="star"/>
             <img src={star} height={20} alt="star"/>
             <img src={star} height={20} alt="star"/>

            </div>
        }

    }

    return (
        <div className="review">
            <div className="reviewHeader"> {props.review.attributes.user.username} rated it {stars()}</div>
            <br/>
            {props.review.attributes.text} <br/>
        </div>
    )
}
   
function mapStateToProps(state){
    return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Review)