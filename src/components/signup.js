import React, {Component} from 'react';
import {postUser} from '../actions/userActions'
import {connect} from 'react-redux'
import Navbar from './navbar'

class Signup extends Component {
    constructor() {
        super();
        this.state= {
            fields: {
                username:'',
                password:'',
                passwordConfirmation:'',
                email: ''
            }
        }
    }

    componentDidMount() {
        if (this.props.loggedIn) {
            this.props.history.push('/');
        }
    }

    handleChange = (e) => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({ fields: newFields });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.postUser(this.state.fields.username, this.state.fields.password, this.state.fields.passwordConfirmation)
      };

      componentDidUpdate() {
        if (this.props.loggedIn) {
            this.props.history.push('/');
        }
    }


    render() {
        return (
            <div className="signup-page">
            <Navbar optionalClass="not-home-nav"/>
            <div className="signup">
                <h2> Sign Up</h2>
                {this.props.error ? <h3>Invalid Inputs, try again</h3> : null}
                <form className="signUpForm" onSubmit={this.handleSubmit}>
                    <label> 
                    <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
                    </label> <br/>
                    <input type="text" name="email" placeholder="email" onChange={this.handleChange}/>
                    <label> 
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange}/> 
                    </label> <br/>
                    <label>
                    <input type="password" name="passwordConfirmation" placeholder="confirm password" onChange={this.handleChange}/> <br/>
                    </label>
                    <input type="submit" value="Signup" />
                </form>
            </div>
            </div>
    )
    }
}

function mapDispatchToProps(dispatch){
    return { postUser: (username, password, passwordConfirmation) => dispatch(postUser(username, password, passwordConfirmation)) }
  }
   
  function mapStateToProps(state){
    return {currentUser: state.userReducer.currentUser,
        error: state.userReducer.error,
        loggedIn: state.userReducer.loggedIn
    }
  }
   

export default connect(mapStateToProps, mapDispatchToProps)(Signup)