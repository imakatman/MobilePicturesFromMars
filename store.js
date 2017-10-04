import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { autoRehydrate } from 'redux-persist';

// const rootReducer = combineReducers({
//
// });

const loggerMiddleware = createLogger();

export const store = createStore(
  compose(
    // rootReducer,
    autoRehydrate(),
    applyMiddleware(
      loggerMiddleware
    )
  )
);