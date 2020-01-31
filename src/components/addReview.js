import React, {Component} from 'react';
import {postUser} from '../actions/userActions'
import {connect} from 'react-redux'
class AddReview extends Component {
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
            <div className="addReview">
                
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
   

export default connect(mapStateToProps, mapDispatchToProps)(AddReview)