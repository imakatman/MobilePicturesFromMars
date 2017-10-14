import initialState from '../initialState';
import {
  REQUEST_PICTURES,
  RECEIVE_PICTURES,
} from '../actions/getData';
import {
  SELECT_ROVER,
  SELECT_CAMERA
} from '../actions/selected';

export function Selected(state = initialState.Selected, action) {
  switch (action.type) {
    case SELECT_ROVER:
      return Object.assign({}, state, {
        Rover: {
          Name: action.rover,
          selected: true
        }
      });
    case SELECT_CAMERA:
      return Object.assign({}, state, {
        Camera: {
          Name: action.camera,
        }
      });
    case REQUEST_PICTURES:
      return Object.assign({}, state, {
        Camera: {
          isFetching: true
        }
      });
    case RECEIVE_PICTURES:
      return Object.assign({}, state, {
        Camera: {
          isFetching: false,
          validated: true,
          selected: true
        }
      });
    default:
      return state;
  }
}