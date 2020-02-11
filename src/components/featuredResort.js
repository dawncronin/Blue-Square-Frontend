import React from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';


function FeaturedResort(props) {


    let slug = props.resort? props.resort.attributes.name.split(" ").join("_") : ""

    return (
        <div>
        <NavLink to={`/resorts/${slug}`}>
        {props.resort? (
        <div className="featuredResort">
            <div  >
            <img src={props.resort.attributes.photo.photo_url} width="100%"/>
            </div >
         <div id="featuredName">Featured Resort: {props.resort.attributes.name} </div>
        
         </div>
         ) : ( 
             "loading..."
         )}
         </NavLink>
         </div>
    )
}
function mapStateToProps(state){
    return {resort: state.resortsReducer.resorts[0]}
}

   
export default connect(mapStateToProps)(FeaturedResort)