import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const app = combineReducers(rootReducer);

const store = createStore(
  app,
  applyMiddleware(thunk)
);

export default store;