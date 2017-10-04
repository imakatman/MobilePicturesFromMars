export const REQUEST_DATA = 'requestData';

function requestData(){
  return{
    type: REQUEST_DATA,
  }
}

export const FETCH_DATA = 'fetchData';

export function fetchData(){
  requestData();
  return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${apiKey}`);
}