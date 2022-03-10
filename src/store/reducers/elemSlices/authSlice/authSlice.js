import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: { 
        loader: false
    },
    reducers: {
        LOADER_DISPLAY_ON: (state) => {
            state.loader = true
        },
        LOADER_DISPLAY_OFF: (state) => {
            state.loader = false
        }
    }
})

export const { LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF} = loaderSlice.actions
export default loaderSlice.reducer

