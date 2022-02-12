import React, { createContext, useReducer, useContext, useEffect, useMemo } from "react";
import api from "../services/api";

const initialState = { // начальное состояние
  user: null,
  token: localStorage.getItem('token') ?? '',
}

const AuthContext = createContext(initialState); //создаем контекст

const reducer = (state, action) => {
  switch(action.type) {
    case 'LOGGED_IN':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
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

  const logIn = async (data) => {
    try {
      const { token, user } = data;

      localStorage.setItem('token', token);
      dispatch({
        type: 'LOGGED_IN',
        payload: { user, token }
      });

    } catch (error) {
      throw new Error(error);
    }
  };

  const logOut = async () => {
    try {
      localStorage.removeItem('token');
      dispatch({ type: 'LOGGED_OUT' });

    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [getUser])


  const contextValue = useMemo(
    () => ({
      ...authState,
      logIn,
      logOut,
    }),
    [authState, logIn, logOut]
  );


  return <AuthContext.Provider value={contextValue}>
    { children }
  </AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);
export { AuthContext, useAuth }
export default AuthProvider;