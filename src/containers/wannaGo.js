import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getSavedResorts} from "../actions/resortActions"
import ResortsList from "../containers/resortsList"
import {getCurrentUser} from '../actions/userActions'


class WannaGo extends Component {

    componentDidMount() {
        if (this.props.currentUser.id && this.props.type !== "wannaGo") {
            this.props.getSavedResorts(this.props.currentUser.id, "wannaGo")
        }
    }


    componentDidUpdate() {
        if (this.props.currentUser.id && this.props.type !== "wannaGo") {
            this.props.getSavedResorts(this.props.currentUser.id, "wannaGo")
        }
      
    }


    render() {
        return (
            <div className="wannaGo">
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
    resorts: state.resortsReducer.savedResorts,
    type: state.resortsReducer.saveType
}
}
   

export default connect(mapStateToProps, mapDispatchToProps)(WannaGo)