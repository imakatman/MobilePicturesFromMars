import initialState from '../initialState';
import {
  SELECT_KEY_INUSE,
  REQUEST_DATA,
  RECEIVE_DATA
} from '../actions/getData';

function setApiKey(key, action) {
  if (key.key === action.keyInUse) {
    return Object.assign({}, key, {
      inUse: true
    });
  } else {
    return Object.assign({}, key, {
      inUse: false
    });
  }
}

function Keys(state = initialState.Api_Keys.Keys, action) {
  if (action.type === SELECT_KEY_INUSE) {
    return state.map(keyObj => (
        {
          [Object.keys(keyObj)[0]]: setApiKey(keyObj[Object.keys(keyObj)[0]], action)
        }
    ));
  }
}

export function Api_Keys(state = initialState.Api_Keys, action) {
  switch (action.type) {
    case SELECT_KEY_INUSE:
      return Object.assign({}, state, {
        Keys: Keys(state.Keys, action)
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