import React from 'react';
import {logout} from '../actions/userActions'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';
import logo from "../BlueSquare.png"

function Navbar(props) {

    const handleOnClick = () => { 
        props.logout()
    }

    return (
        <nav className="nav">
            <ul>
                {!props.currentUser.id? ( 
                    
                <div className="navitems">
                        <NavLink to="/"><img src={logo} height={40} /></NavLink>

                <li>
                    <NavLink to="/resorts">Resorts</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Signup</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                </div>
                 ) : (
                <div className="navitems">
                     <NavLink to="/"><img src={logo} height={40} /></NavLink>

                <li>
                    <NavLink to="/resorts">Resorts</NavLink>
                </li>
                <li>
                    <NavLink to="/wannaGo">Wanna Go</NavLink>
                </li>
                <li>
                    <NavLink to="/pastTrips">Past Trips</NavLink>
                </li>
                <li >
                    <NavLink  className="logout" to="/" onClick={handleOnClick}>Logout</NavLink>
                </li>
                </div>
                )}
            </ul>
        </nav>
    )
}
   
function mapStateToProps(state){
    return {currentUser: state.userReducer.currentUser}
}

function mapDispatchToProps(dispatch) {
    return { logout: () => dispatch(logout()) }
}
   
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)