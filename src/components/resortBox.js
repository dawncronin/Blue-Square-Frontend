import React from 'react';
import {connect} from 'react-redux'
import { Doughnut } from 'react-chartjs-2';
import location from "../img/location.png"
import snowflake from "../img/snowflake.png"
import vertical from "../img/vertical.png"
import terrain from "../img/snowboard.png"
import mountain from "../img/mountain.png"
import runs from "../img/runs.png"
import lifts from "../img/lifts.png"
import star from "../img/star.png"


function ResortBox(props) { 

    let stars = () => {
        if (props.rating < 1) {
            return ""
        }
        else if (props.rating < 1.5){
            return <div className="star"> <img src={star} height={25} alt="star"/></div>
        }
        else if (props.rating < 2.5) {
            return <div className="star" > <img src={star} height={25} alt="star"/>
             <img src={star} height={25} alt="star"/>
            </div>
        }
        else if (props.rating < 3.5) {
            return <div className="star"> <img src={star} height={25} alt="star"/>
             <img src={star} height={25} alt="star"/>
             <img src={star} height={25} alt="star"/>
            </div>
        }
        else if (props.rating < 4.5) {
            return <div className="star"> <img src={star} height={25} alt="star"/>
             <img src={star} height={25} alt="star"/>
             <img src={star} height={25} alt="star"/>
             <img src={star} height={25} alt="star"/>
            </div>
        }
        else if (props.rating < 6) {
            return <div className="star"> <img src={star} height={25} alt="star"/>
             <img src={star} height={25} alt="star"/>
             <img src={star} height={25} alt="star"/>
             <img src={star} height={25} alt="star"/>
             <img src={star} height={25} alt="star"/>

            </div>
        }

    }


    return (
        <div >
            {props.resort.attributes? (

        <div className="resortBox">
       
         <div id="resortImageBox"> 
         <img id="resortImage" src={props.photo.attributes.photo_url} alt=""/>
         </div>

         <div className="resortImageText">
             <div className="fuckcss"> 
         <h1 id="resortBoxTitle">{props.resort.attributes.name}  {stars()}</h1>
         <a  id="visit" target="_blank" href={props.resort.attributes.link}> Visit Website </a>
         <p id="location"> <img src={location} alt="" height="30px"/> {props.resort.attributes.state}, {props.resort.attributes.region} </p>
         
         
         <div className="saveResort">
               {!props.loggedIn?  ( "" ) : (

                   !props.saved ? (
                    <div id="save">
                    <form onSubmit={props.onSave}>  Interested in {props.resort.attributes.name}?

                    <select id="selectSaveType" onChange={props.onSelection}>
                     <option value="" disabled selected>Save Resort</option>
                        <option value="wannaGo"> Wanna Go</option>
                        <option value="pastTrip"> Have Visited</option>
                    </select>
                    <input type="submit" value="Save!"/>
                   </form>
                   </div> )
                     : (
                     <p> Saved to your resorts!
                      <button onClick={props.onDelete} className="deleteButton">Remove</button>
                     </p>
                     ))}
               
                </div>
         </div>


         </div>

         <br/>

         <p id="desc">{props.resort.attributes.long_desc}</p>

         <p id="runs"> {<img className="icon" src={runs} alt="" height="40px"/>} Runs: {props.resort.attributes.runs}</p>

         <p id="lifts"> {<img  className="icon"src={lifts} alt="" height="40px"/>} Lifts: {props.resort.attributes.lifts} </p>

         <p id="price"> Daily Price: ${props.resort.attributes.price} </p>

         <p id ="acres"> Skiable Acres: {props.resort.attributes.acres}</p>

         <p id="snow"> {<img  className="icon"src={snowflake} id="snowflake"  alt="" height="40px"/>} Yearly Snowfall: {props.resort.attributes.snowfall} in </p>

         <p id="vertical"> {<img className="icon" src={vertical}  id="height"alt="" height="35px"/>}    Vertical Drop: {props.resort.attributes.vertical} ft</p>

         <p id="summit"> {<img className="icon" id="mountain" src={mountain} alt="" height="50px"/>} Summit Height: {props.resort.attributes.summit} ft</p>


         <p id="terrain"> {<img className="icon" src={terrain} alt="" height="40px"/>} {props.resort.attributes.terrain_parks} Terrain Parks</p>

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