import * as actionTypes from './actionTypes';
import API from '../../Api';

export const notebookStart = () => {
  return {
    type: actionTypes.FETCH_NOTEBOOK_START
  };
};

export const notebookSuccess = (notebook) => {
  return {
    type: actionTypes.FETCH_NOTEBOOK_SUCCESS,
    notebook: notebook
  };
};

export const notebookFail = (error) => {
  return {
    type: actionTypes.FETCH_NOTEBOOK_FAIL,
    error: error
  };
};

const postNotebookStart = (state, action) => {
  return {
    type: actionTypes.POST_NOTEBOOK_START
  };
};

const postNotebookSuccess = (state, action) => {
  return {
    type: actionTypes.POST_NOTEBOOK_SUCCESS
  };
};

const postNotebookFail = (error) => {
  return {
    type: actionTypes.POST_NOTEBOOK_FAIL,
    error: error
  };
}

const updateNotebookStart = (state, action) => {
  return {
    type: actionTypes.UPDATE_NOTEBOOK_START
  };
};


const updateNotebookSuccess = (state, action) => {
  return {
    type: actionTypes.UPDATE_NOTEBOOK_SUCCESS
  };
};

const updateNotebookFail = (error) => {
  return {
    type: actionTypes.UPDATE_NOTEBOOK_FAIL,
    error: error
  };
}


export const notebook = (token, id) => {
  return dispatch => {
    dispatch(notebookStart());

    API.get(('/notebook/' + id), {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
      .then( response => {
        dispatch(notebookSuccess(response.data.data))
      })
      .catch(err => {
        console.log(err);
        dispatch(notebookFail(err));
      })
  };
};

export const notebookPost = (title, token) => {
  return dispatch => {
    dispatch(postNotebookStart());

    const notebookData = {
      name: title
    }

    API.post('/notebooks', notebookData, {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
      .then( response => {
        dispatch(postNotebookSuccess())
      })
      .catch(err => {
        console.log(err);
        dispatch(postNotebookFail(err));
      })
  };
};

export const notebookUpdate = (id, title, token) => {
  return dispatch => {
    dispatch(updateNotebookStart());

    const notebookData = {
      name: title
    }

    API.put(('/notebooks/' + id), notebookData, {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
      .then( response => {
        dispatch(updateNotebookSuccess())
      })
      .catch(err => {
        console.log(err);
        dispatch(updateNotebookFail(err));
      })
  };
};
