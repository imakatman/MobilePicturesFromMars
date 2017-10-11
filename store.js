import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { autoRehydrate } from 'redux-persist';

import { Api_Keys, Mission_Manifest, Cameras_Data } from './reducers/data';
import { Selected } from './reducers/selected';
import initialState from './initialState';

const rootReducer = combineReducers({
  Api_Keys,
  Mission_Manifest,
  Cameras_Data,
  Selected
});

const loggerMiddleware = createLogger();

export default store =
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  );
