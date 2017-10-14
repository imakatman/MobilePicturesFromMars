import initialState from '../initialState';
import {
  SELECT_KEY_INUSE,
  REQUEST_DATA,
  RECEIVE_DATA,
  RECEIVE_PICTURES,
} from '../actions/getData';

// *
// *
// * Api_Keys
// * ========================================================================== */
// *

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

// *
// *
// * Mission_Manifest
// * ========================================================================== */
// *

function Rovers_Mission(state = initialState.Mission_Manifest.Rovers, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      let rovers = action.data.rovers;
      return rovers.map(rover => (
        {
          Name: rover.name,
          id: rover.id,
          Total_Photos: rover.total_photos,
          Status: rover.status,
          Max_Sol: rover.max_sol,
          Max_Date: rover.max_date,
        }
      ));
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
        isFetching: false,
        Rovers: Rovers_Mission(state, action)
      });
    default:
      return state;
  }
}

// *
// *
// * Cameras
// * ========================================================================== */
// *

function Pictures(state, action) {
  switch (action.type) {
  }
}

function Cameras(state, action, index) {
  switch (action.type) {
    case RECEIVE_DATA:
      let cameras = action.data.rovers[index].cameras;
      return cameras.map(camera => (
        {
          Name: camera.name,
          Full_Name: camera.full_name,
          Pictures: {}
        }
      ));
    case RECEIVE_PICTURES:
      console.log(action.data);
    // return Object.assign({}, state, {
    //   [action.]
    // })
    default:
      return state;
  }
}

function Rovers(state = initialState.Cameras_Data.Rovers, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      let rovers = action.data.rovers;
      return rovers.map((rover, roverIndex) => (
        Object.assign({}, state, {
          [rover.name]: Cameras(state[rover.name], action, roverIndex)
        })
      ));
    default:
      return state;
  }
}

export function Cameras_Data(state = initialState.Cameras_Data, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        Rovers: Rovers(state.Rovers, action)
      });
    default:
      return state;
  }
}