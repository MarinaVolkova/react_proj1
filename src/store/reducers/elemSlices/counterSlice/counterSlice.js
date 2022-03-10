import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    history: [],
    message: ''
  }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        INCREMENT: (state) => {
            state.value += 1,
            state.history.push('+1') 
        },
        DECREMENT: (state) => {
            state.value -= 1,
            state.history.push('-1') 
        }
    }
})

export const { INCREMENT, DECREMENT } = counterSlice.actions
export default counterSlice.reducer