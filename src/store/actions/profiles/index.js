import api from "../../../services/api";
import { LOGGED_OUT, SIGN_UP } from "../../reducers/elemSlices/profileSlice/profileSlice";
import { loaderOff, loaderOn } from "../auth";

// export const getUser = () => async (dispatch, getState) => {
//     try{
//         dispatch(loaderOn());
//         if (getState.token) {
//             const { data } = await api.profile.userData();
//             dispatch({ type: SET_USER, payload: data });
//         }    
//     } catch (error) {
//         throw new Error(error);
//     } finally {
//       setTimeout(() => {
//         dispatch(loaderOff());
//       }, 500);
   
//     }
// }

// export const signIn = ( data ) => async (dispatch, getState) => {
//     try{
//         const { token, user } = data;
//         localStorage.setItem('token', token);
//         localStorage.setItem('user', user.email);
//         dispatch({
//             type: SIGN_IN,
//             payload: { user, token }
//           });
//     } catch (error) {
//         throw new Error(error);
//     }
// }

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