import initialState from '../initialState';
import {
 SELECT_ROVER
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
    default:
      return state;
  }
}