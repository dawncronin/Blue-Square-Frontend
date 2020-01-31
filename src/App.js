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
