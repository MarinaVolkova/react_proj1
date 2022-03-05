import api from "../../../services/api";
import { LOADING_INFO, LOGGED_OUT, SET_USER, SIGN_IN, SIGN_UP } from "../../types/types";

export const getUser = () => async (dispatch, getState) => {
    try{
       //dispatch({ type: LOADING_INFO, payload: 1 });
        if (getState.token) {
            const { data } = await api.profile.userData();
            dispatch({ type: SET_USER, payload: data });
        }    
    } catch (error) {
        throw new Error(error);
    } finally {
        //dispatch({ type: LOADING_INFO, payload: 0 });
    }
}

export const signIn = ( data ) => async (dispatch, getState) => {
    try{
        const { token, user } = data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', user.email);
        dispatch({
            type: SIGN_IN,
            payload: { user, token }
          });
    } catch (error) {
        throw new Error(error);
    }
}

export const logOut = () => async (dispatch, getState) => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      dispatch({ type: LOGGED_OUT });
    
    } catch (error) {
      throw new Error(error);
    }
  }

  export const signUn = (data) => (dispatch, getState) => {
    try {
        const { user } = data;
        dispatch({
            type: SIGN_UP,
            payload: { user }
          });
    } catch (error) {
      throw new Error(error);
    }
  }