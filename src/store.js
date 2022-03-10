// import { createStore, combineReducers, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// const appStore = combineReducers(rootReducer)

// export const store = createStore(
//   appStore,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: rootReducer,
  //принимаю несериализуемые данные в состояние, что не окей,поэтому пока serializableCheck: false
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(thunk),
})
