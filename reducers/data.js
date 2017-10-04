import { REQUEST_DATA } from '../actions/getData';

function requestData(state = false, action) {
  if (action.type === REQUEST_DATA) {
    return true;
  }
}