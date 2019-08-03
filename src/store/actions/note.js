import * as actionTypes from './actionTypes';
import API from '../../Api';

export const noteStart = () => {
  return {
    type: actionTypes.FETCH_NOTE_START
  };
};

export const noteSuccess = (note) => {
  return {
    type: actionTypes.FETCH_NOTE_SUCCESS,
    note: note
  };
};

export const noteFail = (error) => {
  return {
    type: actionTypes.FETCH_NOTE_FAIL,
    error: error
  };
};

export const note = (token, id) => {
  return dispatch => {
    dispatch(noteStart());

    API.get(('/notes/' + id), {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
      .then( response => {
        dispatch(noteSuccess(response.data.data))
      })
      .catch(err => {
        console.log(err);
        dispatch(noteFail(err));
      })
  };
};
