import React, {Component} from 'react';
import {connect} from 'react-redux'
import SavedResortCard from "../components/savedResortCard"
import {getResorts} from "../actions/resortActions"

import './savedResortsList.styles.css'

class SavedResortsList extends Component{

    render() {
        let resorts = this.props.filteredResorts.map(resort =>  <SavedResortCard resort={resort} key={resort.id}/> ) 
        

    return(
            <div className="saved-resort-list">
                {resorts}

            </div>
        )
    }
   
}
   
function mapStateToProps(state){
    return {resorts: state.resortsReducer.resorts,
        loadingResorts: state.resortsReducer.loadingResorts

    }
}

function mapDispatchToProps(dispatch){
    return {getResorts: () => dispatch(getResorts())}
}
 

export default connect(mapStateToProps, mapDispatchToProps)(SavedResortsList)