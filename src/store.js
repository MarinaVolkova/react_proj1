import { createStore, combineReducers } from 'redux';
import rootReducer from "./store/reducers";

const appStore = combineReducers(rootReducer)

export const store = createStore(
  appStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
