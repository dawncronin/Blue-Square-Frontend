import React, {Component} from 'react';
import {connect} from 'react-redux'
import ResortCard from "../components/resortCard"
import {getResorts} from "../actions/resortActions"



class ResortsList extends Component{

    render() {
        let resorts = this.props.filteredResorts.map(resort =>  <ResortCard resort={resort} key={resort.id} sort={this.props.sort}/> ) 
        

    return(
            <div className="resortList">
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
 

export default connect(mapStateToProps, mapDispatchToProps)(ResortsList)