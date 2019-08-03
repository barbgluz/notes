import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  notebooks: [],
  error: null,
};

const notebooksStart = (state, action) => {
  return updateObject(state, { error: null, loading: true  });
};

const notebooksSuccess = (state, action) => {
  return updateObject(state, {
    notebooks: action.notebooks,
    error: null,
  });
};

const notebooksFail = (state, action) => {
  return updateObject(state, {
      error: action.error,
      loading: false
    });
  };

  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case actionTypes.FETCH_NOTEBOOKS_START: return notebooksStart(state, action);
      case actionTypes.FETCH_NOTEBOOKS_SUCCESS: return notebooksSuccess(state, action);
      case actionTypes.FETCH_NOTEBOOKS_FAIL: return notebooksFail(state, action);
    default:
      return state;
  }
}

export default reducer;
