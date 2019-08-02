import React, { Component } from 'react';

import classes from '../../containers/Layout/Layout.module.css';
import styles from './Note.module.css';

class Note extends Component {

  render() {
    return(
      <div>
        <div className={classes.Title}>
          <h1>Note Title</h1>
          <button className={classes.Btn}>Edit</button>
        </div>

        <div className={styles.Content}>
          <div className={styles.Description}>
            <p> Suspendisse dui nulla, luctus vel vestibulum eget, volutpat sed nisi. Donec sollicitudin lacus sed sapien maximus, ac ultrices urna blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed imperdiet, orci quis molestie vehicula, felis felis porttitor ligula, eu congue tortor mauris a neque. Cras fringilla ac mi a egestas. Etiam sit amet blandit neque. Nullam feugiat eleifend neque, non rhoncus enim. Aliquam convallis posuere mollis. Nullam ac efficitur dui. Nam luctus placerat efficitur. Suspendisse porta suscipit felis ut gravida. Duis aliquet elit a dictum fringilla. Cras sem magna, pharetra vel euismod lobortis, consequat eu diam. Fusce a scelerisque nisi, in aliquet augue. Nullam non arcu metus. Proin eu orci neque. </p>
          </div>
        </div>
      </div>
      );
  }
}

export default Note;
