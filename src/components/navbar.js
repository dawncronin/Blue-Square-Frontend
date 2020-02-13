import React from 'react';
import {logout} from '../actions/userActions'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';
import logo from "../BlueSquare.jpg"

function Navbar(props) {
    const handleOnClick = () => { 
        props.logout()
    }

    return (
            <div className="nav">
                {!props.currentUser.id? ( 
                    <div className="navbar">
                       <NavLink id="navLogo" to="/"> <img id="logo" src={logo} alt="logo" /> </NavLink>
                       <div id="navResorts"> <NavLink to="/resorts">Resorts</NavLink> </div>
                       <div id="navSignup"> <NavLink to="/signup">Signup</NavLink> </div>
                       <div id="navLogin"> <NavLink to="/login">Login</NavLink> </div>
                    </div>
                ) : 
                (
                    <div className="navbar">
                    <NavLink id="navLogo" to="/"><img id="logo" src={logo}  alt="logo"/></NavLink>
                    <div id="navResorts"> <NavLink to="/resorts">Resorts</NavLink> </div>
                    <div id="navWannaGo"> <NavLink to="/wannaGo">Wanna Go</NavLink> </div>
                    <div id="navPastTrips"> <NavLink to="/pastTrips">Past Trips</NavLink> </div>
                    <div id="navLogout"> <NavLink  className="logout" to="/" onClick={handleOnClick}>Logout</NavLink> </div>
                </div>
                )}
        </div>
    )
}
   
function mapStateToProps(state){
    return {currentUser: state.userReducer.currentUser}
}

function mapDispatchToProps(dispatch) {
    return { logout: () => dispatch(logout()) }
}
   
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)