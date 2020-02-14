import React from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';


function ResortCard(props) {

    let slug = props.resort.attributes.name.split(" ").join("_")

    let sortValue = () => {
        switch (props.sort) {
            case "lifts" : {
                    return  props.resort.attributes.lifts
                }  
            case "runs" : {
                return  props.resort.attributes.runs
            } 
            case "green" : {
                return  `${props.resort.attributes.green}%`
            } 
            case "blue" : {
                return  `${props.resort.attributes.blue}%`
            } 
            case "black" : {
                return  `${props.resort.attributes.black}%`
            } 
            case "double_black" : {
                return  `${props.resort.attributes.double_black}%`
            } 
            case "vertical" : {
                return  `${props.resort.attributes.vertical} ft`
            } 
            case "summit" : {
                return  `${props.resort.attributes.summit} ft`
            } 
            case "snowfall" : {
                return  `${props.resort.attributes.snowfall} in`
            } 
            case "acres" : {
                return  props.resort.attributes.acres
            } 
            case "terrain_parks" : {
                return  props.resort.attributes.terrain_parks
            } 
            case "none" : {
                return ""
            }
        }
    }

    let sort = () => {
        switch (props.sort) {
            case "lifts" : {
                    return  "Lifts: "
                }  
            case "runs" : {
                return  "Runs: "

            } 
            case "green" : {
                return  "Green Runs: "

            } 
            case "blue" : {
                return  "Blue Runs: "

            } 
            case "black" : {
                return  "Black Runs: "

            } 
            case "double_black" : {
                return  "Double Black Runs: "
            } 
            case "vertical" : {
                return  "Vertical Drop: "
            } 
            case "summit" : {
                return  "Summit Height: "
            } 
            case "snowfall" : {
                return  "Average Yearly Snowfall: "
            } 
            case "acres" : {
                return  "Skiable Acres: "
            } 
            case "terrain_parks" : {
                return  "Terrain Parks: "
            } 
            case "none" : {
                return ""
            }
        }
    }

    console.log(props.sort)

    return (
        <NavLink to={`/resorts/${slug}`}>
        <div className="resortCard">
            <div  id="resortCardPhoto">
            <img src={props.resort.attributes.photo.photo_url} alt=""/>
            </div >
         <div id="resortCardName">{props.resort.attributes.name}   </div>
          <div id="resortCardParams">{sort()}{sortValue()}</div>

         <p id="resortCardText">{props.resort.attributes.short_desc.substring(0, 250)}...</p>
        
         </div>
         </NavLink>
    )
}
   
export default connect()(ResortCard)