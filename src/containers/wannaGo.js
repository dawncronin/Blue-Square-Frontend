import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getSavedResorts} from "../actions/resortActions"
import SavedResortsList from "../containers/savedResortsList"
import {getCurrentUser} from '../actions/userActions'
import Navbar from '../components/navbar'



class WannaGo extends Component {

    componentWillMount() {
        console.log(this.props)
        if (this.props.currentUser.id) {
            this.props.getSavedResorts(this.props.currentUser.id, "wannaGo")
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.saveType !== "wannaGo" && this.props.currentUser.id) {
            this.props.getSavedResorts(this.props.currentUser.id, "wannaGo")
        }
    }

    render() {
        return (
            <div className="wannaGo">
                < Navbar />
            {this.props.resorts !== "nothing" ? (
                <div>
                    <SavedResortsList filteredResorts={this.props.resorts || []}/>
            </div> ) : (
                <div className="noSavedResorts"> No Resorts Saved!</div>
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
   

export default connect(mapStateToProps, mapDispatchToProps)(WannaGo)