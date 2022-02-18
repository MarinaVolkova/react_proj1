import React, { createContext, useReducer, useContext, useEffect, useMemo } from "react";
import api from "../services/api";

const initialState = { // начальное состояние 
    user: null,
    token: localStorage.getItem('token') ?? ''
}

const AuthContext = createContext(initialState); //создаем контекст

const reducer = (state, action) => {
switch (action.type) {
    case 'SIGN_IN':
       return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
       }
    case 'SIGN_UP':
        return {
         ...state,
         user: action.payload.user,
         password: action.payload.password,
         firstName: action.payload.firstName,
         lastName: action.payload.lastName
        }
    case 'SET_USER':
        return {
          ...state,
          token: action.payload
        }
    case 'LOGGED_OUT':
          return {
            ...initialState
          }
    default:
        return state;
    }
}


const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(reducer, initialState);

    const getUser = React.useCallback(async () => {
        try {
          if (authState.token) {
            const { data } = await api.profile.userData();
            dispatch({ type: 'SET_USER', payload: data });
          }
    
        } catch (error) {
          throw new Error(error);
        }
      }, [dispatch]);

    const signIn = async (data) => {
        try {
          const { token, user } = data;
    
          localStorage.setItem('token', token);
          localStorage.setItem('user', user.email);
          dispatch({
            type: 'SIGN_IN',
            payload: { user, token }
          });
    
        } catch (error) {
          throw new Error(error);
        }
      };

      const signUn = async (data) => {
        try {
          const { user } = data;
    
          localStorage.setItem('user', user.email);
          localStorage.setItem('user', user.password);
          localStorage.setItem('user', user.firstName);
          localStorage.setItem('user', user.lastName);

          dispatch({
            type: 'SIGN_UP',
            payload: { user }
          });
    
        } catch (error) {
          throw new Error(error);
        }
      };

      const logOut = async () => {
        try {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          dispatch({ type: 'LOGGED_OUT' });
         
    
        } catch (error) {
          throw new Error(error);
        }
      }
    
    const contextValue = useMemo(
        () => ({
          ...authState,
          signIn,
          logOut,
          signUn
        }),
        [authState, signIn, logOut, signUn]
      );

      useEffect(() => {
        getUser();
      }, [getUser])

    return <AuthContext.Provider value={contextValue}>
        { children }
    </AuthContext.Provider>
}
const useAuth = () => useContext(AuthContext);
export { AuthContext, useAuth }
export default AuthProvider;