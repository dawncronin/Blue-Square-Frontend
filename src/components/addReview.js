import React, {Component} from 'react';
import {postReview} from '../actions/reviewActions'
import {connect} from 'react-redux'

import './addReview.styles.css'

class AddReview extends Component {
    constructor() {
        super();
        this.state= {
            fields: {
                rating: 5,
                text: ""
            }
        }
    }

    handleChange = (e) => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({ fields: newFields });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.postReview(this.props.currentResort.resort.data.id, this.props.currentUser.id, this.state.fields.text, this.state.fields.rating)
        this.setState({text: ""})
    };

    render() {
        return (
            <div className="add-review">
                {!this.props.currentResort.resort? ("loading..." ) : (
                <form onSubmit={this.handleSubmit}> 
                {this.props.error?  "Invalid Review!"  : "" }
                <h3>Add your review of {this.props.currentResort.resort.data.attributes.name}:</h3>
                    <select id="rating" name="rating" onChange={this.handleChange}>
                        <option value="5"> Five Star</option>
                        <option value="4"> Four Star</option>
                        <option value="3"> Three Star</option>
                        <option value="2"> Two Star</option>
                        <option value="1"> One Star</option>
                    </select> <br/>
                    <textarea name="text" value={this.state.text} placeholder={`What stands out from ${this.props.currentResort.resort.data.attributes.name}?`} onChange={this.handleChange}/> <br/>
                    <input type="submit" name="Add Review" value="Add Review"/>
                </form>
                )}
            </div>
    )
    }
}

function mapDispatchToProps(dispatch){
    return { postReview: (resortId, userId, text, rating) => dispatch(postReview(resortId, userId, text, rating)) }
  }
   
  function mapStateToProps(state){
    return {currentUser: state.userReducer.currentUser,
    currentResort: state.resortsReducer.currentResort,
    error: state.reviewsReducer.error
}
  }
   

export default connect(mapStateToProps, mapDispatchToProps)(AddReview)