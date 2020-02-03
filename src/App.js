import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from "./containers/home";
import Signup from "./components/signup"
import Login from "./components/login"
import {getCurrentUser} from "./actions/userActions"
import {connect} from 'react-redux'
import Navbar from './components/navbar'
import Resorts from "./containers/resorts"
import WannaGo from "./containers/wannaGo"
import PastTrips from "./containers/pastTrips"







class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
     this.props.getCurrentUser()
    }
  }



render() {


  return (
    <Router>
    <div className="app">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/login"  component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/resorts" component={Resorts}/>
      <Route exact path="/wannago" component={WannaGo}/>
      <Route exact path="/pasttrips" component={PastTrips}/>
    </div>
  </Router>
  );

}}

function mapDispatchToProps(dispatch){
  return { getCurrentUser: () => dispatch(getCurrentUser()) }
}
 
function mapStateToProps(state){
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps, mapDispatchToProps) (App) 
