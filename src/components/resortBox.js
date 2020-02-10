import React from 'react';
import {connect} from 'react-redux'
import { Doughnut } from 'react-chartjs-2';


function ResortBox(props) {

    return (
        <div className="resortBox">
            {props.resort.attributes? (

        <div>
         <h1 id="resortTitle">{props.resort.attributes.name} </h1>
         <p> Located in {props.resort.attributes.state} in the {props.resort.attributes.region} </p>
         <img id="resortImage" src={props.photos[0].attributes.photo_url} height="500px"/>
         <br/>
         <a  target="_blank" href={props.resort.attributes.link}> Visit Website </a>


         <p>{props.resort.attributes.long_desc}</p>

         <p> Runs: {props.resort.attributes.runs}</p>

         <p> Lifts: {props.resort.attributes.lifts} </p>

         <p> Daily Price: ${props.resort.attributes.price} </p>

         <p> Yearly Snowfall: {props.resort.attributes.snowfall} </p>

         <p> Vertical Drop: {props.resort.attributes.vertical} ft</p>

         <p> Summit Height: {props.resort.attributes.summit} ft</p>

         <p> Yearly Snowfall: {props.resort.attributes.snowfall} </p>

         <p> {props.resort.attributes.terrain_parks} Terrain Parks</p>

         <p> Opening Date: {props.resort.attributes.open_date}    Closing Date: {props.resort.attributes.close_date}</p>


         < Doughnut data={{labels: ['Green Runs', 'Blue Runs', 'Black Runs', 'Double Black Runs'],
        datasets: [{
            label: 'Runs Percentages',
            data: [props.resort.attributes.green, props.resort.attributes.blue, props.resort.attributes.black, props.resort.attributes.double_black],
            backgroundColor: [
                'rgba(10,180, 40, 0.8)',
                'rgba(54, 150, 235, 0.8)',
                'rgba(100, 100, 100, 0.8)',
                'rgba(0, 0, 0, 0.8)',
            ]
        }]
    }}/>






            
         </div>
            ):("loading...")}
        </div>
        
        
    )
}
   
export default connect()(ResortBox)