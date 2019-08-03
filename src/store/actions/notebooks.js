import * as actionTypes from './actionTypes';
import API from '../../Api';

export const notebooksStart = () => {
  return {
    type: actionTypes.FETCH_NOTEBOOKS_START
  };
};

export const notebooksSuccess = (notebooks) => {
  return {
    type: actionTypes.FETCH_NOTEBOOKS_SUCCESS,
    notebooks: notebooks
  };
};

export const notebooksFail = (error) => {
  return {
    type: actionTypes.FETCH_NOTEBOOKS_FAIL,
    error: error
  };
};

export const notebooks = (token) => {
  return dispatch => {
    dispatch(notebooksStart());

    API.get('/notebooks', {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
      .then( response => {
        dispatch(notebooksSuccess(response.data.data))
      })
      .catch(err => {
        console.log(err);
        dispatch(notebooksFail(err));
      })
  };
};
