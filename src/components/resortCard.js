import React from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';


function ResortCard(props) {

    let slug = props.resort.attributes.name.split(" ").join("_")

    return (
        <NavLink to={`/resorts/${slug}`}>
        <div className="resortCard"> 
       

         <h3>{props.resort.attributes.name} </h3>

         <p>{props.resort.attributes.short_desc}</p>
        
         </div>
         </NavLink>
    )
}
   
export default connect()(ResortCard)