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
  return updateObject(state, {
        error: null, loading: true,
  });
};

const postNoteSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    submitted: true
  });
};

const postNoteFail = (state, action) => {
  return updateObject(state, {
      error: action.error,
      loading: false,
      submitted: false
    });
  };

const updateNoteStart = (state, action) => {
  return updateObject(state, { error: null, loading: true  });
};

const updateNoteSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    submitted: true
  });
};

const updateNoteFail = (state, action) => {
  return updateObject(state, {
      error: action.error,
      loading: false
    });
  };

const removeNoteStart = (state, action) => {
  return updateObject(state, { error: null, loading: true  });
};

const removeNoteSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};

const removeNoteFail = (state, action) => {
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

      case actionTypes.UPDATE_NOTE_START: return updateNoteStart(state, action);
      case actionTypes.UPDATE_NOTE_SUCCESS: return updateNoteSuccess(state, action);
      case actionTypes.UPDATE_NOTE_FAIL: return updateNoteFail(state, action);

      case actionTypes.REMOVE_NOTE_START: return removeNoteStart(state, action);
      case actionTypes.REMOVE_NOTE_SUCCESS: return removeNoteSuccess(state, action);
      case actionTypes.REMOVE_NOTE_FAIL: return removeNoteFail(state, action);
    default:
      return state;
  }
}

export default reducer;

