import React from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';

import './savedResortCard.styles.css'

function SavedResortCard(props) {

    let slug = props.resort.attributes.name.split(" ").join("_")

    return (
        <NavLink to={`/resorts/${slug}`}>
        <div className="resort-card">
            <div  className="resort-card-photo">
            <img src={props.resort.attributes.photo.photo_url} alt=""/>
            </div >
         <div className="resort-card-name">{props.resort.attributes.name} </div>

         <p className="resort-card-text">{props.resort.attributes.short_desc.substring(0, 250)}...</p>
        
         </div>
         </NavLink>
    )
}
   
export default connect()(SavedResortCard)