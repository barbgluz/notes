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

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expires_at');
  return {
    type: actionTypes.AUTH_LOGOUT
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
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('expires_at', response.data.expires_at);
        dispatch(authSuccess(response.data.access_token));
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

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');

    if(!token) {
      dispatch(logout());
    } else {
        const expirationDate = localStorage.getItem('expires_at');
        if(expirationDate > new Date()) {
          dispatch(logout());
        } else {
          dispatch(authSuccess(token));
        }
    }
  }
}
