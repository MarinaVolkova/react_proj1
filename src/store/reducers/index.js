import addDelReducer from "./addDel";
import counterReducer from "./modifElem/modifElem";


const rootReducer = {
  addDel: addDelReducer,
  counter:counterReducer
}

export default rootReducer;