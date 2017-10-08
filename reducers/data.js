import initialState from '../initialState';
import {
  SELECT_KEY_INUSE,
  REQUEST_DATA,
  RECEIVE_DATA
} from '../actions/getData';

function setApiKey(state = initialState.Api_Keys.Keys, action, key) {
  if (key[action.keyInUse]) {
    return Object.assign({}, state, {
      inUse: true
    });
  } else {
    return Object.assign({}, state, {
      inUse: false
    });
  }
}

export function Api_Keys(state = initialState.Api_Keys, action) {
  switch (action.type) {
    case SELECT_KEY_INUSE:
      return state.Keys.map(key => {
        Object.assign({}, state, {
          Keys: [
            {
              [Object.keys(key)]: setApiKey(state.Keys, action, key)
            }
          ]
        });
      });
    default:
      return state;
  }
}

export function Mission_Manifest(state = initialState.Mission_Manifest, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}