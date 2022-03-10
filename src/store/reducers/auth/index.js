import { LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON } from "../../types/types"


const initialState = { 
    loader: false
}

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case  LOADER_DISPLAY_ON:
           return {
            ...state,
            loader: true
           }
        case LOADER_DISPLAY_OFF:
            return {
             ...state,
             loader: false
            }
        default:
            return state;
        }
}

// export default loaderReducer;