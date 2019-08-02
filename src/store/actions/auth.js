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

export const signupStart = () => {
  return {
    type: actionTypes.SIGNUP_START
  };
};

export const signupSuccess = () => {
  return {
    type: actionTypes.SIGNUP_SUCCESS
  };
};

export const signupFail = (error) => {
  return {
    type: actionTypes.SIGNUP_FAIL,
    error: error
  };
};

export const signup = (name, email, password, passwordConfirm) => {
  return dispatch => {
    dispatch(signupStart());

    const signupData = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirm
    }
    console.log("ICI")
    console.log(signupData)

    API.post('/signup', signupData)
      .then( response => {
        dispatch(signupSuccess())
      })
      .catch(err => {
        console.log(err);
        dispatch(signupFail(err));
      })
  };
};
