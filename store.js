import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { autoRehydrate } from 'redux-persist';

import initialState from './initialState';
import { Mission_Manifest } from './reducers/data';

// const rootReducer = combineReducers({
//
// });

const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    Mission_Manifest,
    initialState,
    compose(
      autoRehydrate(),
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  );
}
