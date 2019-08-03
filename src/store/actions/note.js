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

const postNoteStart = (state, action) => {
  return {
    type: actionTypes.POST_NOTE_START
  };
};

const postNoteSuccess = (state, action) => {
  return {
    type: actionTypes.POST_NOTE_SUCCESS
  };
};

const postNoteFail = (error) => {
  return {
    type: actionTypes.POST_NOTE_FAIL,
    error: error
  };
}

const updateNoteStart = (state, action) => {
  return {
    type: actionTypes.UPDATE_NOTE_START
  };
};


const updateNoteSuccess = (state, action) => {
  return {
    type: actionTypes.UPDATE_NOTE_SUCCESS
  };
};

const updateNoteFail = (error) => {
  return {
    type: actionTypes.UPDATE_NOTE_FAIL,
    error: error
  };
}

const removeNoteStart = (state, action) => {
  return {
    type: actionTypes.UPDATE_NOTE_START
  };
};


const removeNoteSuccess = (state, action) => {
  return {
    type: actionTypes.REMOVE_NOTE_SUCCESS
  };
};

const removeNoteFail = (error) => {
  return {
    type: actionTypes.REMOVE_NOTE_FAIL,
    error: error
  };
}

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

export const post = (title, description, notebook_id, token) => {
  return dispatch => {
    dispatch(postNoteStart());

    const noteData = {
      title: title,
      description: description,
      notebooks_id: notebook_id
    }

    API.post('/notes', noteData, {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
      .then( response => {
        dispatch(postNoteSuccess())
      })
      .catch(err => {
        console.log(err);
        dispatch(postNoteFail(err));
      })
  };
};

export const update = (id, title, description, notebook_id, token) => {
  return dispatch => {
    dispatch(updateNoteStart());

    const noteData = {
      title: title,
      description: description,
      notebooks_id: notebook_id
    }

    API.put(('/notes/' + id), noteData, {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
      .then( response => {
        dispatch(updateNoteSuccess())
      })
      .catch(err => {
        console.log(err);
        dispatch(updateNoteFail(err));
      })
  };
};

export const remove = (id, token) => {
  return dispatch => {
    dispatch(removeNoteStart());

    API.delete(('/notes/' + id), {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
      .then( response => {
        dispatch(removeNoteSuccess())
      })
      .catch(err => {
        console.log(err);
        dispatch(removeNoteFail(err));
      })
  };
};
