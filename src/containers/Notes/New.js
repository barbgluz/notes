import React, { Component } from 'react';

import classes from '../../containers/Layout/Layout.module.css';
import '../../styles/form.css';

class Notes extends Component {

  render() {
    return(
      <div>
        <div className={classes.Title}>
          <h1>New Note</h1>
        </div>

        <div className="Content">
          <form className="Form">
            <div className="InputGroup">
              <input
                className="Input"
                type="text"
                id="title"
                required />
              <label className="Label" htmlFor="title">Title</label>
            </div>

            <div className="InputGroup">
              <textarea
                className="Textarea"
                id="description"
                name="description"
                cols="30" rows="10"
                required></textarea>
              <label className="Label" htmlFor="description">Description</label>
            </div>

            <button className="Btn">Save</button>

          </form>
        </div>
      </div>
      );
  }
}

export default Notes;
