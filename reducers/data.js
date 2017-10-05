import { REQUEST_DATA, RECEIVE_DATA } from '../actions/getData';

export function Mission_Manifest(state, action){
  switch(action.type){
    case(REQUEST_DATA):
      return Object.assign({}, state, {
        isFetching: true
      });
    case(RECEIVE_DATA):
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}