import React, { createContext, useReducer } from "react";

const firstState = { // начальное состояние 
    data:[],
    ui: {}
}

const reducer = (state, action) => {

    return state;
}

export const ListContext = createContext(firstState); //создаем контекст

export const ListProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, firstState);

    return <ListContext.Provider value={{dispatch, state}}>
        { children }
    </ListContext.Provider>
}