import React, { createContext, useReducer } from "react";

const firstState = { // начальное состояние 
    data:[],
    ui: {}
}

const reducer = (state, action) => {
//state - начальное состояние 
//action - объект, благодоря которому мы можем менять состояние в reducer
    // if (action.type === 'CHANGE_VALUE'){
    //      return {
    //         ...state,
    //         data: state.data
    //     }
    // }  
    return state;

// default:
//     throw new Error(`Unhandled action type: ${action.type}`);
}

export const ListContext = createContext(firstState); //создаем контекст

export const ListProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, firstState);

    return <ListContext.Provider value={{dispatch, state}}>
        { children }
    </ListContext.Provider>
}