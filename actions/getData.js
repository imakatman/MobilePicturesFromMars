import { selectRover, selectCamera } from './selected';

const API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers`;

// =============== **************
//
//
// ACTIONS THAT MAKE API CALLS
//
//
// =============== **************

export function fetchManifestAndCameras() {
  return function (dispatch, getState) {
    let store    = getState();
    let Api_Keys = store.Api_Keys;
    let apiKey   = Api_Keys.keyInUse;

    dispatch(selectKeyInUse(apiKey));
    dispatch(requestManifestAndCameras());
    return fetch(`${API_URL}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveManifest(json));
        dispatch(receiveCameras(json));
        dispatch(selectRover("Curiosity"));
      });
  }
}

export function fetchMaxDatePicsFromAllCams(rover) {
  return function (dispatch, getState) {
    let store       = getState();
    let Api_Keys    = store.Api_Keys;
    let apiKey      = Api_Keys.keyInUse;
    let dateToFetch = store.Mission_Manifest.Rovers.filter(data => data.Name === rover)[0].Max_Date;
    // let firstCamera = store.Cameras_Data.Rovers.filter(data => data.Name === rover)[0].Name;

    dispatch(requestPicturesFromAllRovers());
    return fetch(`${API_URL}/${rover}/photos?earth_date=${dateToFetch}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(json => dispatch(receivePicturesFromAllRovers(json)));
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

export const REQUEST_MANIFEST_AND_CAMERAS = 'requestManifestAndCameras';

function requestManifestAndCameras() {
  return {
    type: REQUEST_MANIFEST_AND_CAMERAS,
  }
}

export const RECEIVE_MANIFEST = 'receiveManifest';

function receiveManifest(data) {
  return {
    type: RECEIVE_MANIFEST,
    data,
  }
}

export const RECEIVE_CAMERAS = 'receiveCameras';

function receiveCameras(data) {
  return {
    type: RECEIVE_CAMERAS,
    data,
  }
}

export const REQUEST_PICTURES_FROM_ALL_ROVERS = 'requestPicturesFromAllRovers';

function requestPicturesFromAllRovers() {
  return {
    type: REQUEST_PICTURES_FROM_ALL_ROVERS,
  }
}

export const RECEIVE_PICTURES_FROM_ALL_ROVERS = 'receivePicturesFromAllRovers';

function receivePicturesFromAllRovers(data) {
  return {
    type: RECEIVE_PICTURES_FROM_ALL_ROVERS,
    data
  }
}