import { selectRover, selectCamera } from './selected';

const API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers`;

// =============== **************
//
//
// ACTIONS THAT MAKE API CALLS
//
//
// =============== **************

export function fetchManifest() {
  return function (dispatch, getState) {
    let store    = getState();
    let Api_Keys = store.Api_Keys;
    let apiKey   = Api_Keys.keyInUse;

    dispatch(selectKeyInUse(apiKey));
    dispatch(requestManifest());
    return fetch(`${API_URL}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveManifest(json));
        dispatch(selectRover("Curiosity"));
      });
  }
}

export function fetchMaxDatePicsFromAllCams(rover, date) {
  return function (dispatch, getState) {
    let store       = getState();
    let Api_Keys    = store.Api_Keys;
    let apiKey      = Api_Keys.keyInUse;
    let dateToFetch = date || store.Mission_Manifest.Rovers.filter(data => data.Name === rover)[0].Max_Date;

    // console.log(dateToFetch);
    dispatch(requestPictures(camera, rover, dateToFetch, 1));
    return fetch(`${API_URL}/${rover}/photos?earth_date=${dateToFetch}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(json => {
        dispatch(receivePictures(json));
        dispatch(selectCamera(camera, dateToFetch));
      });
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

export const REQUEST_MANIFEST = 'requestManifest';

function requestManifest() {
  return {
    type: REQUEST_MANIFEST,
  }
}

export const RECEIVE_MANIFEST = 'receiveManifest';

function receiveManifest(data) {
  return {
    type: RECEIVE_MANIFEST,
    data,
  }
}

export const REQUEST_PICTURES = 'requestPictures';

function requestPictures(camera, name, date, page) {
  return {
    type: REQUEST_PICTURES,
    camera,
    name,
    date,
    page
  }
}

export const RECEIVE_PICTURES = 'receivePictures';

function receivePictures(data) {
  return {
    type: RECEIVE_PICTURES,
    data
  }
}