export const getCounterValue = (state) => {
  return state.counter.value
}

export const getCounterHistory = (state) => {
  return state.counter.history;
}