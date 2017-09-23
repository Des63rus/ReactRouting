import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//reduxForm - function helper as connect, it helps to communicate with redux-store

class PostNew extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}   //field.input is object which has a lot of handlers onblur, onchange etc.
                    // ... means that we put all props of field to props of our input
                />
            </div>
        )
    }

    
    render() {
        return (
            <form>
                <Field
                    name="title" // Piece of state that is managed by this field
                    component={this.renderField} // function or component wich will be shown 
                    label="Title"
                />
                <Field 
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        )
    }
}

export default reduxForm({
    form: 'PostsNewForm' //must be unique. namespace to prevent of mixin states of different forms
})(PostNew);

