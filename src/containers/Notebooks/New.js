import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import * as validate from '../../validation';

import classes from '../../containers/Layout/Layout.module.css';
import '../../styles/form.css';

class NewNotebook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notebookForm: {
        title: {
          value: "",
          errors: {
            required: "Notebook title is required"
          }
        },
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
    let notebook = {
      title: {
        value: "",
        errors: {
          required: "Notebook title is required"
        }
      },
      id: null,
    }

    if(this.props.location.state) {
      let notebook = {
        title: {
          value: this.props.location.state.title,
          errors: {
            required: "Notebook title is required"
          }
        },
        id: this.props.location.state.notebook_id,
      }
    }

    this.setState({notebookForm: notebook})
  }

  validateForm() {
    let form = this.state.notebookForm;
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
      if(!this.state.notebookForm.id) {
        this.props.onNewNotebook(this.state.notebookForm.title.value,
          this.props.token);
      } else {
        this.props.onUpdateNotebook(this.state.notebookForm.id,
          this.state.notebookForm.title.value,
          this.props.token);
      }
      if(this.props.submitted) {
        this.setState({submitted: true});
      }
    }
  }

  handleChange(event) {
    let key = event.target.id;
    let form = {...this.state.notebookForm};

    form[key].value = event.target.value;

    this.setState({notebookForm: form});
  }

  render() {
    let redirect = <Redirect to="/" />
    if(!this.state.submitted) {
      redirect = null;
    }

    return(
      <div>
        {redirect}
        <div className={classes.Title}>
          <h1>New Notebook</h1>
        </div>

        <div className="Content">
          <form className="Form">
            <div className="InputGroup">
              <input
                className="Input"
                type="text"
                id="title"
                onChange={this.handleChange}
                value={this.state.notebookForm.title.value}
                required />
              <label className="Label" htmlFor="title">Title</label>
            </div>

            <div className="Error">
              <p>{this.state.errors.title}</p>
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
    submitted: state.notebook.submitted
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onNewNotebook: (title, token) => dispatch(actions.notebookPost(title, token)),
    onUpdateNotebook: (id, title, token) => dispatch(actions.notebookUpdate(id, title, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNotebook);
