import React from 'react'
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
            <div className="footer"></div>
        </div>
    )
}

export default Home