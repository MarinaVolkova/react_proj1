import { ADD, DEL } from "../../types/types";

export function add(payload){
    return {
        type: ADD,
        payload: payload
    }
}

export function del(payload){
    return {
        type: DEL,
        payload: payload
    }
}
