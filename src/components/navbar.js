import React from 'react';
import {logout} from '../actions/userActions'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';

import './navbar.styles.css'

function Navbar(props) {
    const handleOnClick = () => { 
        props.logout()
    }


    return (
            <nav className={`nav ${props.optionalClass}`}>
                {!props.currentUser.id? ( 
                    <div className='nav-bar' >                       
                       <NavLink to="/"> <div className="logo"> &#10063; Blue Square</div></NavLink>
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
                       <NavLink to="/"> <div className="logo"> &#10063; Blue Square</div></NavLink>
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
    )
}
   
function mapStateToProps(state){
    return {currentUser: state.userReducer.currentUser}
}

function mapDispatchToProps(dispatch) {
    return { logout: () => dispatch(logout()) }
}
   
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)