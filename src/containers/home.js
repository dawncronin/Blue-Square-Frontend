import React from 'react'
import FeaturedResort from "../components/featuredResort"
import { NavLink } from 'react-router-dom';
import Navbar from '../components/navbar'

import './home.style.css'

function Home() {

    return(
        <div className="home">
            <header>
                <Navbar />
        <div className="text-box">
            <h1>Plan your next mountain adventure.</h1>
                <NavLink className="btn" to="/resorts">Get Started</NavLink>
                <a className="btn" href="#">Learn More</a>
        </div>
        </header>

            <FeaturedResort />

            {/* <div className="about">
            <h3> About Blue Square</h3>
            <div> Blue Square is inspired by my love of skiing and community.
 
                When I'm planning my next ski trip, I always want to know about which resorts are best suited for my ability and interests.

                For the advanced skier, I wanted to include the ability to search for resorts by most black runs, or most powder in a season.

                For someone new to skiing or boarding, I have included ways to check for easy runs and places well suited for beginners.

                <br/> <br/>
                The name blue square comes from the full name intermediate runs.
                No one says "blue square" the way people say "black diamond", so here is an homage to the intermediate runs!    

                 </div>
            </div> */}
            <div className="footer"></div>
        </div>
    )
}

export default Home