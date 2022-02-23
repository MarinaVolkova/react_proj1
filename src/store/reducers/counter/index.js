import {CLOSE_RESET_MESSAGE, DECREMENT, INCREMENT, RESET, SET_HISTORY} from "../../types/counter";

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
    case RESET:
      return {
        ...initialState,
        message: 'RESET SUCCESS'
      }
    case CLOSE_RESET_MESSAGE:
      return {
        ...state,
        message: '',
      }

    default:
      return state;
  };
}

export default counterReducer;
