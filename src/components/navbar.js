import React, {Component} from 'react';
import {login} from '../actions/userActions'
import {connect} from 'react-redux'
import Signup from "../components/signup"
import Login from "../components/login"
import { NavLink } from 'react-router-dom';


function Navbar(props) {




    return (
        <nav>
            <img src=""/>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Signup</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}
   
function mapStateToProps(state){
    return {currentUser: state.currentUser}
}
   

export default connect(mapStateToProps)(Navbar)