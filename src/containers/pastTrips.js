import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getSavedResorts} from "../actions/resortActions"
import ResortsList from "../containers/resortsList"
import {getCurrentUser} from '../actions/userActions'


class PastTrips extends Component{

    componentDidMount() {
        if (this.props.currentUser.id && this.props.type !== "pastTrips") {
            this.props.getSavedResorts(this.props.currentUser.id, "pastTrip")
        }
    }

    componentDidUpdate() {
        if (this.props.currentUser.id && this.props.type !== "pastTrip") {
            this.props.getSavedResorts(this.props.currentUser.id, "pastTrip")
        }
      
    }


    render() {
        return (
            <div className="pastTrips">
            {this.props.resorts !== "nothing" ? (
                <div>
                    <ResortsList filteredResorts={this.props.resorts || []}/>
            </div> ) : (
                <div> loading... </div>
            )}
             </div>
        )
    }
}
   

function mapDispatchToProps(dispatch){
    return { getSavedResorts: (userId, type) => {dispatch(getSavedResorts(userId, type))},
        getCurrentUser: (userId) => {dispatch(getCurrentUser(userId))}
    }
}
   
function mapStateToProps(state){
    return {currentUser: state.userReducer.currentUser,
    resorts: state.resortsReducer.savedResorts}
}
   

export default connect(mapStateToProps, mapDispatchToProps)(PastTrips)