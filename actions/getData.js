export const REQUEST_DATA = 'requestData';

function requestData(){
  return{
    type: REQUEST_DATA,
  }
}

export const RECEIVE_DATA = 'receiveData';

function receiveData(json){
  return{
    type: RECEIVE_DATA,
    json,
  }
}

export const FETCH_DATA = 'fetchData';

export function fetchData(){
  return function(dispatch, getState){
    let i = getState.Api_Keys.indexOfKeyInUse;
    let apiKey = getState.Api_Keys.Keys[i].key;

    dispatch(requestData());
    return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${apiKey}`)
          .then(response=>response.json())
          .then(json=>dispatch(receiveData(json)));
  }
}