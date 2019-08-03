import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  note: null,
  error: null,
};

const noteStart = (state, action) => {
  return updateObject(state, { error: null, loading: true  });
};

const noteSuccess = (state, action) => {
  return updateObject(state, {
    note: action.note,
    error: null,
  });
};

const noteFail = (state, action) => {
  return updateObject(state, {
      error: action.error,
      loading: false
    });
  };

const postNoteStart = (state, action) => {
  return updateObject(state, { error: null, loading: true  });
};

const postNoteSuccess = (state, action) => {
  return updateObject(state, {
    note: action.note,
    error: null,
  });
};

const postNoteFail = (state, action) => {
  return updateObject(state, {
      error: action.error,
      loading: false
    });
  };

  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case actionTypes.FETCH_NOTE_START: return noteStart(state, action);
      case actionTypes.FETCH_NOTE_SUCCESS: return noteSuccess(state, action);
      case actionTypes.FETCH_NOTE_FAIL: return noteFail(state, action);
      case actionTypes.POST_NOTE_START: return postNoteStart(state, action);
      case actionTypes.POST_NOTE_SUCCESS: return postNoteSuccess(state, action);
      case actionTypes.POST_NOTE_FAIL: return postNoteFail(state, action);
    default:
      return state;
  }
}

export default reducer;

