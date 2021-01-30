import React from 'react';
import {connect} from 'react-redux'
import { Doughnut } from 'react-chartjs-2';
import terrain from "../img/snowboard.png"
import mountain from "../img/mountain.svg"
import runs from "../img/runs.svg"
import lifts from "../img/lifts.png"

import './resortBox.styles.css'


function ResortBox(props) { 

    let stars = () => {
        if (props.rating < 1) {
            return ""
        }
        else if (props.rating < 1.5){
            return <div className="star">
                        <ion-icon name="star"></ion-icon> 
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                 </div>
        }
        else if (props.rating < 2){
                return <div className="star">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon> 
                 </div>
        }
        else if (props.rating < 2.5) {
            return <div className="star" > 
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
            </div>
        }
        else if (props.rating < 3) {
            return <div className="star" >
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star-half-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
            </div>
        }
        else if (props.rating < 3.5) {
            return <div className="star" > 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
            </div>
        }
        else if (props.rating < 4) {
            return <div className="star">
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star-half-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
            </div>
        }
        else if (props.rating < 4.5) {
            return <div className="star"> 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star-outline"></ion-icon>
            </div>
        }
        else if (props.rating < 5) {
            return <div className="star"> 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star"></ion-icon> 
                <ion-icon name="star-half-outline"></ion-icon>
            </div>
        }
        else if (props.rating < 6) {
            return <div className="star">
                    <ion-icon name="star"></ion-icon> 
                    <ion-icon name="star"></ion-icon> 
                    <ion-icon name="star"></ion-icon> 
                    <ion-icon name="star"></ion-icon> 
                    <ion-icon name="star"></ion-icon> 
            </div>
        }

    }


    return (
        <div >
            {props.resort.attributes? (

        <div className="resort-box">
        
        <div class="row1">
            <div className="resort-title-box">
                <h1 class="resort-box-title">{props.resort.attributes.name}  </h1>
                <div> {stars()} </div>
                <div className="resortImageText">
                    <p> <ion-icon name="location-outline"></ion-icon>{props.resort.attributes.state}, {props.resort.attributes.region} </p>
                    <div><a target="_blank" href={props.resort.attributes.link}> Visit Website </a> </div>
                </div>
            </div>
            <div className="resort-image-box"> 
                <img className="resort-image" src={props.photo.attributes.photo_url} alt=""/>
            </div>

        </div>

        <div class="row2">
            <div className="desc-box">
                <p className="desc">{props.resort.attributes.long_desc}</p>
                <div className="save-resort">
                    {!props.loggedIn?  ( "" ) : (!props.saved ? (
                        <div id="save">
                            <form onSubmit={props.onSave}>  Interested in {props.resort.attributes.name}?
                                <select id="selectSaveType" onChange={props.onSelection}>
                                    <option value="" disabled selected>Choose</option>
                                    <option value="wannaGo"> Wanna Go</option>
                                    <option value="pastTrip"> Have Visited</option>
                                </select>
                                <input type="submit" value="Save"/>
                            </form>
                    </div> )
                        : (
                        <p> Saved to your resorts!
                            <button onClick={props.onDelete} className="deleteButton">Remove</button>
                        </p>
                        )
                    )}
                </div>
            </div>
        </div>

        <div className="row3"> 
            <div className="left-col"> <ion-icon name="pricetags"></ion-icon> ${props.resort.attributes.price} / Day</div>
            <div className="right-col"> {<img className="icon" src={runs} alt="" height="40px"/>} {props.resort.attributes.runs} Runs</div>

            <div className="left-col"> {<img  className="icon"src={lifts} alt="" height="40px"/>}{props.resort.attributes.lifts} Lifts </div>


            <div className="right-col"> <ion-icon name="map"></ion-icon> {props.resort.attributes.acres} Skiable Acres</div>

            <div className="left-col">  <ion-icon name="snow"></ion-icon> {props.resort.attributes.snowfall} in of Yearly Snowfall</div>

            <div className="right-col"> <ion-icon name="arrow-down"></ion-icon> Verical Drop of {props.resort.attributes.vertical} ft</div>

            <div className="left-col"> {<img className="icon" id="mountain" src={mountain} alt="" height="50px"/>} Summit Height of {props.resort.attributes.summit} ft</div>


            <div className="right-col"> {<img className="icon" src={terrain} alt="" height="40px"/>} {props.resort.attributes.terrain_parks} Terrain Parks</div>

            <div className="left-col"> <ion-icon name="calendar"></ion-icon> Opening Date: {props.resort.attributes.open_date}</div>  
            <div className="right-col">  <ion-icon name="calendar-number"></ion-icon> Closing Date: {props.resort.attributes.close_date}</div>
        </div>
       
            <div className="pie"> 
                < Doughnut 
                    width={300}
                    height={300}
                    options={{ maintainAspectRatio: false, 
                        animation: {duration: 0}}}
                    data={{labels: ['Green Runs', 'Blue Runs', 'Black Runs', 'Double Black Runs'],
                        datasets: [{
                            label: 'Runs Percentages',
                            data: [props.resort.attributes.green, props.resort.attributes.blue, props.resort.attributes.black, props.resort.attributes.double_black],
                            backgroundColor: [
                                'rgba(10,180, 40, 0.8)',
                                'rgb(6, 82, 221, 0.8)',
                                'rgba(100, 100, 100, 0.8)',
                                'rgba(0, 0, 0, 0.8)',
                            ]
                        }],
                    }}
                />
            </div>      
    </div>
        ):("loading...")}
    </div>
    )
}
   
export default connect()(ResortBox)