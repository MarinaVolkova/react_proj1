import usersReducer from "./auth";
import catsReducer from "./cats";
import counterReducer from "./counter/counter";


const rootReducer = {
  cats: catsReducer,
  counter: counterReducer,
  users: usersReducer
}

export default rootReducer;