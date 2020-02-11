import React, {Component} from 'react';
import {login} from '../actions/userActions'
import {connect} from 'react-redux'


class Login extends Component {
    constructor() {
        super();
        this.state= {
            error: false,
            fields: {
                username:'',
                password:''
            }
        }
    }
    handleChange = e => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({ fields: newFields });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.fields.username, this.state.fields.password)
        this.props.history.push('/');
      };

    render() {
    return (
        <div className="loginPage">
        <div className="login">
            <br/>
            <h2> Login</h2>
            {this.state.error ? <h4>Invalid Username or Password, Try Again</h4> : null}
            <form className="loginForm" onSubmit={this.handleSubmit}>
                <label> 
                <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
                </label> <br/>
                <label>
                <input type="password" name="password" placeholder="password" onChange={this.handleChange}/> 
                </label> <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
        </div>
    )
    }
}

function mapDispatchToProps(dispatch){
    return { login: (username, password) => dispatch(login(username, password)) }
  }
   
  function mapStateToProps(state){
    return {currentUser: state.currentUser}
  }
   

export default connect(mapStateToProps, mapDispatchToProps)(Login)