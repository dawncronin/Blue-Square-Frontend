import React from 'react'
// import { connect } from 'react-redux'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './pages/home-page'
import Products from './pages/products-page'
import Users from './pages/users-page'
import UserPage from './pages/user-page'
import SignIn from './pages/sign-in-page'
import NavBar from './components/nav-bar'

import { getCurrentUser } from './redux/user-actions'


import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
     this.props.getCurrentUser()
    }
  }
  
render() {
  return (
    <Router>
    <div className="App">
      <NavBar/>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path={`/users/:userId`}>
                <UserPage />
            </Route>
        <Router path="/users">
          <Users />
        </Router>
      </Switch>
    </div>
    </Router>
  )
}

}

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: () => dispatch(getCurrentUser())
})

const mapStateToProps = (state) => ({
  currentUser: state.userReducer.currentUser,
  loggedIn: state.userReducer.loggedIn
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
