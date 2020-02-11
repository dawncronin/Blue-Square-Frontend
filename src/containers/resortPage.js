import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getResort} from "../actions/resortActions"
import {getReviews} from "../actions/reviewActions"
import {saveResort} from "../actions/resortActions"
import AddReview from "../components/addReview"
import ReviewList from "../containers/reviewList"
import ResortBox from "../components/resortBox"

class ResortPage extends Component {
    constructor() {
        super()
        this.state = {
            saveResort: "",
            saved: ""
        }
    }

    componentDidMount() {
        this.props.getResort(this.props.match.params.resortName)
        this.props.getReviews(this.props.match.params.resortName)
    }

    onSelection = (event) => {
        this.setState({saveResort: event.target.value})
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps)
        if (this.props.currentResort.saved_resorts !== prevProps.currentResort.saved_resorts) {
           let saved = this.props.currentResort.saved_resorts.data.find(savedResort => savedResort.relationships.user.data.id == this.props.currentUser.id)
           console.log(saved)
           this.setState({saved: saved})
        }
    }

    onSave = (event) => {
        event.preventDefault()
        if (this.state.saveResort !== "") {
            this.props.saveResort(this.props.currentUser.id, this.props.currentResort.resort.data.id, this.state.saveResort)
        }
    }

    render() {
        let saved = this.props.currentResort.savedResort? (
            this.props.currentResort.savedResort.data.find(savedResort => savedResort.relationships.user.data.id == this.props.currentUser.id)
        ) : (
            false
        )

        return (
            <div className="resortPage">

                <div className="resortBoxCont" >

               {this.props.currentResort.resort? (<ResortBox 
                    resort={this.props.currentResort.resort.data} 
                    photo={this.props.currentResort.photo.data}     
                    onSave={this.onSave}
                    onSelection={this.onSelection}
                    saved={this.state.saved}
                    />
               ) : ( "loading" ) }
               </div>

               {/* <div className="saveResort">
               {!this.props.currentResort.resort?  ( "loading" ) : (

                   !saved ? (
                       <div id="save">
                    <form onSubmit={this.onSave}>  Interested in {this.props.currentResort.resort.data.attributes.name}?

                    <select onChange={this.onSelection}>
                     <option value="" disabled selected>Save Resort</option>
                        <option value="wannaGo"> Wanna Go</option>
                        <option value="pastTrip"> Have Visited</option>
                    </select>
                    <input type="submit"/>
                   </form>
                   </div> )
                     : (
                         <p> Saved to your resorts!</p>
                     ))}
               
                </div> */}
              <div className="reviewSection">
               <AddReview/>
               <ReviewList/>
               </div>

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
  