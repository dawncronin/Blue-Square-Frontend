import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getResort} from "../actions/resortActions"
import {getReviews} from "../actions/reviewActions"
import {saveResort} from "../actions/resortActions"
import AddReview from "../components/addReview"
import ReviewList from "../containers/reviewList"

class ResortPage extends Component {
    constructor() {
        super()
        this.state = {
            saveResort: "",
        }
    }

    componentDidMount() {
        this.props.getResort(this.props.match.params.resortName)
        this.props.getReviews(this.props.match.params.resortName)
    }

    onSelection = (event) => {
        this.setState({saveResort: event.target.value})
    }

    onSave = (event) => {
        event.preventDefault()
        if (this.state.saveResort !== "") {
            console.log(this.props)
            this.props.saveResort(this.props.currentUser.id, this.props.currentResort.data.id, this.state.saveResort)
        }
    }

    render() {
        let saved = this.props.currentResort.included? (
            this.props.currentResort.included.find(savedResort => savedResort.relationships.user.data.id == this.props.currentUser.id)
        ) : (
            false
        )
        console.log(saved)
        return (
            <div className="resortPage">
                <p>blurp blupr</p>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                 <br/>

               {this.props.currentResort.data? (this.props.currentResort.data.attributes.name 
               ) : ( "loading" ) }

               {!this.props.currentResort.data?  ( "loading" ) : (
                   !saved ? (
                    <form onSubmit={this.onSave}>
                    <select onChange={this.onSelection}>
                     <option value="" disabled selected>Save Resort</option>
                        <option value="wannaGo"> Wanna Go</option>
                        <option value="pastTrip"> Have Visited</option>
                    </select>
                    <input type="submit"/>
                   </form> )
                     : (
                         <p> Saved to your resorts!</p>
                     )
                   )}
              
               
               <AddReview/>
               <ReviewList/>
            </div>
        )
        } 
}
   
function mapDispatchToProps(dispatch){
    return {getResort: (resortName) => {dispatch(getResort(resortName))},
        getReviews: (resortName) => {dispatch(getReviews(resortName))},
        saveResort: (userId, resortId, type) => {dispatch(saveResort(userId, resortId, type))}
    }
}

function mapStateToProps(state){
    return {currentResort: state.resortsReducer.currentResort,
    reviews: state.reviewsReducer.reviews,
    currentUser: state.userReducer.currentUser}
}
  
  export default connect(mapStateToProps, mapDispatchToProps) (ResortPage) 
  