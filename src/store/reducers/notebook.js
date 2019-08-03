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

const postNotebookStart = (state, action) => {
  return updateObject(state, { error: null, loading: true  });
};

const postNotebookSuccess = (state, action) => {
  return updateObject(state, {
    notebook: action.notebook,
    error: null,
    submitted: true
  });
};

const postNotebookFail = (state, action) => {
  return updateObject(state, {
      error: action.error,
      loading: false,
    });
  };

const updateNotebookStart = (state, action) => {
  return updateObject(state, { error: null, loading: true  });
};

const updateNotebookSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    submitted: true
  });
};

const updateNotebookFail = (state, action) => {
  return updateObject(state, {
      error: action.error,
      loading: false
    });
  };

const removeNotebookStart = (state, action) => {
  return updateObject(state, { error: null, loading: true  });
};

const removeNotebookSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};

const removeNotebookFail = (state, action) => {
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

      case actionTypes.POST_NOTEBOOK_START: return postNotebookStart(state, action);
      case actionTypes.POST_NOTEBOOK_SUCCESS: return postNotebookSuccess(state, action);
      case actionTypes.POST_NOTEBOOK_FAIL: return postNotebookFail(state, action);

      case actionTypes.UPDATE_NOTEBOOK_START: return updateNotebookStart(state, action);
      case actionTypes.UPDATE_NOTEBOOK_SUCCESS: return updateNotebookSuccess(state, action);
      case actionTypes.UPDATE_NOTEBOOK_FAIL: return updateNotebookFail(state, action);
    default:
      return state;
  }
}

export default reducer;
