import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { autoRehydrate } from 'redux-persist';

import { Api_Keys, Mission_Manifest } from './reducers/data';
import initialState from './initialState';

const rootReducer = combineReducers({
  Api_Keys,
  Mission_Manifest,
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
