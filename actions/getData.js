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

    let apiKey       = Api_Keys.keyInUse;

    dispatch(selectKeyInUse(apiKey));
    dispatch(requestData());
    return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${apiKey}`)
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)));
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

export const REQUEST_PHOTOS = 'requestPhotos';

function requestPhotos() {
  return {
    type: REQUEST_PHOTOS,
  }
}

export const RECEIVE_PHOTOS = 'receivePhotos';

function receivePhotos(data) {
  return {
    type: RECEIVE_PHOTOS,
    data,
  }
}