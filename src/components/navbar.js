import React from 'react';
import {logout} from '../actions/userActions'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';
import logo from "../img/BlueSquare.jpg"

import './navbar.styles.css'

function Navbar(props) {
    const handleOnClick = () => { 
        props.logout()
    }


    return (
        // <header>
            <nav className={`nav ${props.optionalClass}`}>
                {!props.currentUser.id? ( 
                    <div className='nav-bar' >
                       {/* <NavLink id="navLogo" to="/"> <img id="logo" src={logo} alt="logo" /> </NavLink> */}
                       <div class="logo"> &#10063; Blue Square</div>
                       <ul>
                           <li >
                                <NavLink to="/signup">Signup</NavLink>
                           </li>
                           <li>
                                <NavLink to="/login">Login</NavLink>
                           </li>
                           <li >
                                <NavLink to="/resorts">Resorts</NavLink>
                           </li>
                       </ul>
                    </div>
                ) : 
                (
                    <div className="nav-bar">
                    {/* <NavLink id="navLogo" to="/"> <img id="logo" src={logo} alt="logo" /> </NavLink> */}
                    <div class="logo"> <span className="square">&#10066;</span> Blue Square</div>
                    <ul>
                        <li id="nav-element">
                            <NavLink  className="logout" to="/" onClick={handleOnClick}>Logout</NavLink>
                        </li>
                        <li>
                            <NavLink to="/wannaGo">Wanna Go</NavLink>
                        </li>
                        <li >
                            <NavLink to="/pastTrips">Past Trips</NavLink>
                        </li>
                        <li >
                             <NavLink to="/resorts">Resorts</NavLink>
                        </li>

                    </ul>
                 </div>
                )}
        </nav>
        /* <div className="text-box">
            <h1>Plan your next mountain adventure.</h1>
                <NavLink className="btn" to="/resorts">Get Started</NavLink>
                <a className="btn" href="#">Learn More</a>
        </div> */
    /* </header> */
    )
}
   
function mapStateToProps(state){
    return {currentUser: state.userReducer.currentUser}
}

function mapDispatchToProps(dispatch) {
    return { logout: () => dispatch(logout()) }
}
   
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)