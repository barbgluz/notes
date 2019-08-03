import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import classes from '../../containers/Layout/Layout.module.css';
import styles from './Note.module.css';

class Note extends Component {

  componentDidMount() {
    this.props.onGetNote(this.props.token, this.props.match.params.id);
  }

  render() {

    let note = null;

    if(this.props.note) {
      note = (
        <div>
          <div className={classes.Title}>
            <h1>{this.props.note.title}</h1>
            <button className={classes.Btn}>Edit</button>
          </div>

          <div className={styles.Content}>
            <div className={styles.Description}>
              <p>{this.props.note.description}</p>
            </div>
          </div>
        </div>
        );
    }

    return(
      <div>
        {note}
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    note: state.note.note,
    token: state.auth.token,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetNote: (token, id) => dispatch(actions.note(token, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
