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
