import { DECREMENT, INCREMENT } from "../../types/types"

const initialState = {
    value: 0,
    history: [],
    message: ''
  }
  
  const counterReducer = (state = initialState, action) => {
    switch(action.type) {
      case INCREMENT:
        return {
          ...state,
          value: state.value + 1,
          history: [...state.history, '+1']
        }
      case DECREMENT:
        return {
          ...state,
          value: state.value - 1,
          history: [...state.history, '-1']
        }
  
      default:
        return state;
    };
  }
  
  export default counterReducer;