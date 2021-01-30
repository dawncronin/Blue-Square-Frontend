import React from 'react'
import Navbar from './navbar'

import './about.styles.css'
const About = () => {
return (
    <div className="about-page">
        <Navbar optionalClass="not-home-nav"/>
        <div className="about">
            <h1>Explore Ski Resorts With Eaze</h1>
            <h4>Make an account or sign in for full access</h4>

            <div className="about-row">
                <div>
                    <ion-icon name="search"></ion-icon>
                    <h5>Sort and Filter Resorts</h5>
                    <ul>
                        <li>
                            Filter based on your ski level
                        </li>
                        <li>
                            Sort total snowfall, skiable acreas, or vertical drop
                        </li>
                        <li>
                            Limit resorts by daily price 
                        </li>
                    </ul>
                </div>
                <div>
                    <ion-icon name="map"></ion-icon>
                    <h5>Browse Resorts on the Interactive Map</h5>
                    <ul>
                        <li>
                            Map updates based on filtered results
                        </li>
                        <li>
                            Choose a specific region
                        </li>
                        <li>
                            Zoom in to see ski runs
                        </li>
                    </ul>
                </div>
                <div>
                    <ion-icon name="bookmark"></ion-icon>
                    <h5>Save Resorts as Your Favorites</h5>
                    <ul>
                        <li>
                            Create an account to save resorts
                        </li>
                        <li>
                            Add resorts to your past trips
                        </li>
                        <li>
                           Keep track of resorts you want to visit
                        </li>
                    </ul>
                </div>
                <div className="last-about-div">
                    <ion-icon name="star"></ion-icon>
                    <h5>Read and Write Reviews</h5>
                    <ul>
                        <li>
                            Add Reviews to resorts you have visited
                        </li>
                        <li>
                            See star ratings based on reviews
                        </li>
                        <li>
                            Read the reviews of other skiers
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <footer>

        </footer>
    </div>
)
}

export default About

