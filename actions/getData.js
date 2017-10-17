const API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers`;

// =============== **************
//
//
// ACTIONS THAT MAKE API CALLS
//
//
// =============== **************

export function fetchData() {
  return function (dispatch, getState) {
    let store    = getState();
    let Api_Keys = store.Api_Keys;
    let apiKey = Api_Keys.keyInUse;

    dispatch(selectKeyInUse(apiKey));
    dispatch(requestData());
    return fetch(`${API_URL}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)));
  }
}

export const FETCH_PICTURES = "fetchPictures";

export function fetchPictures(rover, camera, date, page) {
  return function (dispatch, getState) {
    let store    = getState();
    let Api_Keys = store.Api_Keys;
    let apiKey   = Api_Keys.keyInUse;
    let fullName = store.Selected.Rover[rover];

    dispatch(requestPictures(camera, fullName, date, page));
    return fetch(`${API_URL}/${rover}/photos?earth_date=${date}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(json => dispatch(receivePictures(json)));
  }
}

// =============== **************
//
//
// ACTIONS THAT REDUCERS ARE LISTENING TO
//
//
// =============== **************

export const SELECT_KEY_INUSE = 'selectKeyInUse';

function selectKeyInUse(keyInUse) {
  return {
    type: SELECT_KEY_INUSE,
    keyInUse
  }
}

export const REQUEST_DATA = 'requestData';

function requestData() {
  return {
    type: REQUEST_DATA,
  }
}

export const RECEIVE_DATA = 'receiveData';

function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data,
  }
}

export const REQUEST_PICTURES = 'requestPictures';

function requestPictures() {
  return {
    type: REQUEST_PICTURES,
  }
}

export const RECEIVE_PICTURES = 'receivePictures';

function receivePictures(data) {
  return {
    type: RECEIVE_PICTURES,
    data
  }
}