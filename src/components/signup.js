import React, {Component} from 'react';
import {postUser} from '../actions/userActions'
import {connect} from 'react-redux'
class Signup extends Component {
    constructor() {
        super();
        this.state= {
            error: false,
            fields: {
                username:'',
                password:'',
                passwordConfirmation:''
            }
        }
    }

    handleChange = (e) => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({ fields: newFields });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.postUser(this.state.fields.username, this.state.fields.password, this.state.fields.passwordConfirmation)
        this.props.history.push('/');
      };

    render() {
        return (
            <div className="signup">
                <h2> Sign Up</h2>
                {this.state.error ? <h3>Invalid Inputs, try again</h3> : null}
                <form className="signUpForm" onSubmit={this.handleSubmit}>
                    <label> 
                    <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
                    </label> <br/>
                    <label> Ski/Board Level:
                    <select  name="level" placeholder="level" onChange={this.handleChange}>
                        <option value="begineer">Begineer</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="expert">Expert</option>
                    </ select>
                    </label> <br/>
                    <label> 
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange}/> 
                    </label> <br/>
                    <label>
                    <input type="password" name="passwordConfirmation" placeholder="confirm password" onChange={this.handleChange}/> <br/>
                    </label>
                    <input type="submit" value="Signup" />
                </form>
            </div>
    )
    }
}

function mapDispatchToProps(dispatch){
    return { postUser: (username, password, passwordConfirmation) => dispatch(postUser(username, password, passwordConfirmation)) }
  }
   
  function mapStateToProps(state){
    return {currentUser: state.currentUser}
  }
   

export default connect(mapStateToProps, mapDispatchToProps)(Signup)