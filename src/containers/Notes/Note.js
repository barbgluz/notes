import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import classes from '../../containers/Layout/Layout.module.css';
import styles from './Note.module.css';

class Note extends Component {

  constructor(props) {
    super(props);

    this.state = {
      submitted: false
    }

    this.deleteNote = this.deleteNote.bind(this);
  }

  componentDidMount() {
    this.props.onGetNote(this.props.token, this.props.match.params.id);
  }

  deleteNote() {
    this.props.onDeleteNote(this.props.token, this.props.match.params.id);

    if(this.props.submitted) {
      this.setState({submitted: true});
    }
  }

  render() {

    let note = null;

    if(this.props.note) {
      note = (
        <div>
          <div className={classes.Title}>
            <h1>{this.props.note.title}</h1>
            <Link to={{
                      pathname: (this.props.match.params.id + "/edit"),
                      state: { notebook_id: this.props.location.state.notebook_id,
                               title: this.props.location.state.title,
                               notebook_title: this.props.location.state.notebook_title,
                               note: this.props.note }
              }}>
              <button className={classes.Btn}>Edit</button>
            </Link>

            <button
              className={classes.Btn}
              onClick={this.deleteNote}>Delete</button>
          </div>

          <div className={styles.Content}>
            <div className={styles.Description}>
              <p>{this.props.note.description}</p>
            </div>
          </div>
        </div>
        );
    }

    let redirect = <Redirect to="/" />
    if(!this.state.submitted) {
      redirect = null;
    }

    return(
      <div>
        {redirect}
        {note}
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    note: state.note.note,
    token: state.auth.token,
    submitted: state.note.submitted
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetNote: (token, id) => dispatch(actions.note(token, id)),
    onDeleteNote: (token, id) => dispatch(actions.remove(id, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
