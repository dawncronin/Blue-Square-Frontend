import React from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';


function ResortCard(props) {

    let slug = props.resort.attributes.name.split(" ").join("_")

    return (
        <NavLink to={`/resorts/${slug}`}>
        <div className="resortCard">
            <div  id="resortCardPhoto">
            <img src={props.resort.attributes.photo.photo_url}/>
            </div >
         <div id="resortCardName">{props.resort.attributes.name} </div>

         <p id="resortCardText">{props.resort.attributes.short_desc.substring(0, 250)}...</p>
        
         </div>
         </NavLink>
    )
}
   
export default connect()(ResortCard)