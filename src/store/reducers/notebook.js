import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  notes: [],
  error: null,
};

const notebookStart = (state, action) => {
  return updateObject(state, { error: null, loading: true  });
};

const notebookSuccess = (state, action) => {
  return updateObject(state, {
    notes: action.notebook,
    error: null,
  });
};

const notebookFail = (state, action) => {
  return updateObject(state, {
      error: action.error,
      loading: false
    });
  };

  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case actionTypes.FETCH_NOTEBOOK_START: return notebookStart(state, action);
      case actionTypes.FETCH_NOTEBOOK_SUCCESS: return notebookSuccess(state, action);
      case actionTypes.FETCH_NOTEBOOK_FAIL: return notebookFail(state, action);
    default:
      return state;
  }
}

export default reducer;
