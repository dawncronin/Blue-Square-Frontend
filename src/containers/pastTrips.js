import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getSavedResorts} from "../actions/resortActions"
import SavedResortsList from "../containers/savedResortsList"
import {getCurrentUser} from '../actions/userActions'
import Navbar from '../components/navbar'

import './pastTrips.styles.css'



class PastTrips extends Component{

    componentWillMount() {
        if (this.props.currentUser.id) {
            this.props.getSavedResorts(this.props.currentUser.id, "pastTrip")
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.saveType !== "pastTrip" && this.props.currentUser.id) {
            this.props.getSavedResorts(this.props.currentUser.id, "pastTrip")
        }
    }


    render() {
        return (
            <div className="past-trips">
            <Navbar optionalClass="not-home-nav"/>
            {this.props.resorts !== "nothing" ? (
                <div>
                    <SavedResortsList filteredResorts={this.props.resorts || []}/>
            </div> ) : (
                <h2 className="no-saved-resorts"> No Resorts Saved!</h2>
                )}

                     <div className="footer"></div>
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
    resorts: state.resortsReducer.savedResorts,
    saveType: state.resortsReducer.saveType
}
}
   
export default connect(mapStateToProps, mapDispatchToProps)(PastTrips)