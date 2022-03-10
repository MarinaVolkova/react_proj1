import { LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON } from "../../types/types";

export function loaderOn(payload){
    return {
        type: LOADER_DISPLAY_ON,
        payload: payload
    }
}
export function loaderOff(payload){
    return {
        type: LOADER_DISPLAY_OFF,
        payload: payload
    }
}