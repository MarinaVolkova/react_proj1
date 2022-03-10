// import usersReducer from "./profiles";
// import catsReducer from "./cats";
// import counterReducer from "./counter/counter";
// import loaderReducer from "./auth";

import catsReducer from "../reducers/elemSlices/catsSlice/catsSlice";
import loaderReducer  from "../reducers/elemSlices/authSlice/authSlice";
import profileReducer  from "../reducers/elemSlices/profileSlice/profileSlice";
import counterReducer  from "../reducers/elemSlices/counterSlice/counterSlice";


const rootReducer = {
  cats: catsReducer,
  counter: counterReducer,
  users: profileReducer,
  loader: loaderReducer
}

export default rootReducer;
