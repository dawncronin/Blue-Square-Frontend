import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getResort} from "../actions/resortActions"
import {getReviews} from "../actions/reviewActions"
import {saveResort} from "../actions/resortActions"
import {deleteSavedResort} from "../actions/resortActions"

import AddReview from "../components/addReview"
import ReviewList from "../containers/reviewList"
import ResortBox from "../components/resortBox"

class ResortPage extends Component {
    constructor() {
        super()
        this.state = {
            saveResort: "",
            saved: "",
            saveId: ""
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
        if ((this.props.currentResort.saved_resorts) && (this.props.currentResort.saved_resorts !== prevProps.currentResort.saved_resorts || this.props.currentUser !== prevProps.currentUser)) {
           let saved = this.props.currentResort.saved_resorts.data.find(savedResort => savedResort.relationships.user.data.id === this.props.currentUser.id)
           if (saved) {
            this.setState({savedId: saved.id})
               saved = saved.attributes.save_type
           }
           this.setState({saved: saved})
        }
    }

    onSave = (event) => {
        event.preventDefault()
        if (this.state.saveResort !== "") {
            this.props.saveResort(this.props.currentUser.id, this.props.currentResort.resort.data.id, this.state.saveResort)
        }
    }

    onDelete = (event) => {
        event.preventDefault()
        this.props.deleteSavedResort(this.state.savedId)
    }

    render() {


        return (
            <div className="resortPage">

                <div className="resortBoxCont" >

               {this.props.currentResort.resort? (<ResortBox 
                    resort={this.props.currentResort.resort.data} 
                    photo={this.props.currentResort.photo.data}     
                    onSave={this.onSave}
                    onDelete={this.onDelete}
                    onSelection={this.onSelection}
                    saved={this.state.saved}
                    loggedIn={this.props.loggedIn}
                    />
               ) : ( "loading" ) }
               </div>

              <div className="reviewSection">
                  {this.props.loggedIn ? (
                                     <AddReview/>
                  ) : (
                      ""
                  )}
               <ReviewList/>
               </div>
            </div>

        )
        } 

}
   
function mapDispatchToProps(dispatch){
    return {getResort: (resortName) => {dispatch(getResort(resortName))},
        getReviews: (resortName) => {dispatch(getReviews(resortName))},
        saveResort: (userId, resortId, type) => {dispatch(saveResort(userId, resortId, type))},
        deleteSavedResort: (savedResortId) => {dispatch(deleteSavedResort(savedResortId))}
    }
}

function mapStateToProps(state){
    return {currentResort: state.resortsReducer.currentResort,
    reviews: state.reviewsReducer.reviews,
    currentUser: state.userReducer.currentUser,
    loggedIn: state.userReducer.loggedIn

}
}
  
  export default connect(mapStateToProps, mapDispatchToProps) (ResortPage) 
  