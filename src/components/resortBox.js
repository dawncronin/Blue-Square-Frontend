import React from 'react';
import {connect} from 'react-redux'
import { Doughnut } from 'react-chartjs-2';


function ResortBox(props) { 

    return (
        <div >
            {props.resort.attributes? (

        <div className="resortBox">
       
         <div id="resortImageBox"> 
         <img id="resortImage" src={props.photo.attributes.photo_url}/>
         </div>

         <div className="resortImageText">
             <div className="fuckcss"> 
         <h1>{props.resort.attributes.name} </h1>
         <a  id="visit" target="_blank" href={props.resort.attributes.link}> Visit Website </a>
         <p id="location"> Located in {props.resort.attributes.state} in the {props.resort.attributes.region} </p>
         <div className="saveResort">
               {!props.resort?  ( "loading" ) : (

                   !props.saved ? (
                       <div id="save">
                    <form onSubmit={props.onSave}>  Interested in {props.resort.attributes.name}?

                    <select onChange={props.onSelection}>
                     <option value="" disabled selected>Save Resort</option>
                        <option value="wannaGo"> Wanna Go</option>
                        <option value="pastTrip"> Have Visited</option>
                    </select>
                    <input type="submit" value="Save!"/>
                   </form>
                   </div> )
                     : (
                         <p> Saved to your resorts!</p>
                     ))}
               
                </div>
         </div>
         </div>

 
         <br/>


         <p id="desc">{props.resort.attributes.long_desc}</p>

         <p id="runs"> Runs: {props.resort.attributes.runs}</p>

         <p id="lifts"> Lifts: {props.resort.attributes.lifts} </p>

         <p id="price"> Daily Price: ${props.resort.attributes.price} </p>

         <p id="snow"> Yearly Snowfall: {props.resort.attributes.snowfall} in </p>

         <p id="vertical"> Vertical Drop: {props.resort.attributes.vertical} ft</p>

         <p id="summit"> Summit Height: {props.resort.attributes.summit} ft</p>


         <p id="terrain"> {props.resort.attributes.terrain_parks} Terrain Parks</p>

         <p id="open"> Opening Date: {props.resort.attributes.open_date}</p>  
        <p id="close">  Closing Date: {props.resort.attributes.close_date}</p>




         <div className="pie"> 
         < Doughnut 
           width={300}
           height={300}
           options={{ maintainAspectRatio: false }}
       data={{labels: ['Green Runs', 'Blue Runs', 'Black Runs', 'Double Black Runs'],
        datasets: [{
            label: 'Runs Percentages',
            data: [props.resort.attributes.green, props.resort.attributes.blue, props.resort.attributes.black, props.resort.attributes.double_black],
            backgroundColor: [
                'rgba(10,180, 40, 0.8)',
                'rgba(54, 150, 235, 0.8)',
                'rgba(100, 100, 100, 0.8)',
                'rgba(0, 0, 0, 0.8)',
            ]
        }],
    }}/>
    </div>
            
         </div>
            ):("loading...")}
        </div>
        
        
    )
}
   
export default connect()(ResortBox)