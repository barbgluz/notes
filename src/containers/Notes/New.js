import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as validate from '../../validation';

import classes from '../../containers/Layout/Layout.module.css';
import '../../styles/form.css';

class Note extends Component {

  constructor(props) {
    super(props);

    this.state = {
      noteForm: {
        title: {
          value: "",
          errors: {
            required: "Title is required"
          }
        },
        description: {
          value: ""
        },
        notebook_id: this.props.location.state.notebook_id,
        id: null
      },
      submitted: false,
      errors: {
        title: []
      },
      isValid: false
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    if(this.props.location.state.note) {
      let descriptionValue = (this.props.location.state.note.description)? this.props.location.state.note.description : "";

      let note = {
      title: {
          value: this.props.location.state.note.title,
          errors: {
            required: "Title is required"
          }
        },
        description: {
          value: descriptionValue
        },
        notebook_id: this.props.location.state.notebook_id,
        id: this.props.location.state.note.id
      }
      this.setState({noteForm: note});
    }

  }

  validateForm() {
    let form = this.state.noteForm;
    let errors;

    errors = {
      title: [],
    };

    if(validate.empty(form.title.value)) errors.title.push(form.title.errors.required)

    let valid = true;
    for(let prop in errors) {
      if(errors[prop].length !== 0 && errors[prop][0] !== undefined) {
        valid = false;
      }
    }

    this.setState({isValid: valid})
    this.setState({errors: errors});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.validateForm();

    if(this.state.isValid) {
      if(!this.state.noteForm.id) {
        this.props.onNewNote(this.state.noteForm.title.value,
          this.state.noteForm.description.value,
          this.state.noteForm.notebook_id,
          this.props.token);
      } else {
        this.props.onUpdateNote(this.state.noteForm.id,
          this.state.noteForm.title.value,
          this.state.noteForm.description.value,
          this.state.noteForm.notebook_id,
          this.props.token);
      }
      if(this.props.submitted) {
        this.setState({submitted: true});
      }
    }

  }

  handleChange(event) {
    let key = event.target.id;
    let form = {...this.state.noteForm};

    form[key].value = event.target.value;

    this.setState({noteForm: form});
  }

  render() {
    let redirect = <Redirect
      to={{pathname: "/notebook/" + this.props.location.state.notebook_id,
      state: {notebook_title: this.props.location.state.notebook_title}}}
    />
    if(!this.state.submitted) {
      redirect = null;
    }

return(
  <div>
    {redirect}
    <div className={classes.Title}>
      <h1>Note</h1>
    </div>

    <div className="Content">
      <form className="Form">
        <div className="InputGroup">
          <input
            className="Input"
            type="text"
            id="title"
            onChange={this.handleChange}
            value={this.state.noteForm.title.value}
            required />
          <label className="Label" htmlFor="title.value">Title</label>
        </div>

        <div className="Error">
          <p>{this.state.errors.title}</p>
        </div>


        <div className="InputGroup">
          <textarea
            className="Textarea"
            id="description"
            name="description"
            onChange={this.handleChange}
            cols="30" rows="10"
            value={this.state.noteForm.description.value}
            required></textarea>
          <label className="Label" htmlFor="description">Description</label>
        </div>

        <button
          className="Btn"
          onClick={this.handleSubmit}>Save</button>

      </form>
    </div>
  </div>
  );
}
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    submitted: state.note
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onNewNote: (title, description, notebook_id, token) => dispatch(actions.post(title, description, notebook_id, token)),
    onUpdateNote: (id, title, description, notebook_id, token) => dispatch(actions.update(id, title, description, notebook_id, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
