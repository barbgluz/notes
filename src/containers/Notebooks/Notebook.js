import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Notebook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id
    }
  }

  componentDidMount() {
    this.props.onGetNotebook(this.props.token, this.props.match.params.id);
  }

  render() {

    let notes = null;

    if(this.props.notebook) {
      notes = this.props.notebook.map(notebook => {
        return(
          <div>title={notebook.name} key={notebook.id} id={notebook.id} </div>
        )
      })
    }

    return(
      <div>
        Notebook
        {notes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notebook: state.notebook.notes,
    token: state.auth.token,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetNotebook: (token, id) => dispatch(actions.notebook(token, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notebook);
