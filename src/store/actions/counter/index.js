import {CLOSE_RESET_MESSAGE, DECREMENT, INCREMENT, RESET} from "../../types/counter";

export function increment(payload) {
  return {
    type: INCREMENT,
    payload: payload
  }
}

export function decrement(payload) {
  return {
    type: DECREMENT,
    payload: payload
  }
}

export function reset(payload) {
  return {
    type: RESET,
    payload: payload
  }
}

export function closeResetMessage(payload) {
  return {
    type: CLOSE_RESET_MESSAGE,
    payload: payload
  }
}