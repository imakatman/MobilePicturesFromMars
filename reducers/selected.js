import initialState from '../initialState';
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
    default:
      return state;
  }
}