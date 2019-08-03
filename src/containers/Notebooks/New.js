import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import classes from '../../containers/Layout/Layout.module.css';
import '../../styles/form.css';

class NewNotebook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notebookForm: {
        title: "",
        id: null
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if(this.props.location.state) {
      let notebook = {
        id: this.props.location.state.notebook_id,
        title: this.props.location.state.title
      }

      this.setState({notebookForm: notebook})
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if(!this.state.notebookForm.id) {
      this.props.onNewNotebook(this.state.notebookForm.title,
                           this.props.token);
    } else {
      this.props.onUpdateNotebook(this.state.notebookForm.id,
                              this.state.notebookForm.title,
                              this.props.token);
    }
  }

  handleChange(event) {
    let key = event.target.id;
    let form = {...this.state.notebookForm};

    form[key] = event.target.value;

    this.setState({notebookForm: form});
  }

  render() {
    return(
      <div>
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
                value={this.state.notebookForm.title}
                required />
              <label className="Label" htmlFor="title">Title</label>
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
  };
}

const mapDispatchToProps = dispatch => {
  return {
        onNewNotebook: (title, token) => dispatch(actions.notebookPost(title, token)),
        onUpdateNotebook: (id, title, token) => dispatch(actions.notebookUpdate(id, title, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNotebook);
