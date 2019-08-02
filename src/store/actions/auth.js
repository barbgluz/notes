import * as actionTypes from './actionTypes';
import API from '../../Api';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());

    const authData = {
      email: email,
      password: password
    }

    API.post('/login', authData)
      .then( response => {
        dispatch(authSuccess(response.data.access_token))
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      })
  };

};
