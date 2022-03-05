import { LOADING_INFO, LOGGED_OUT, SET_USER, SIGN_IN, SIGN_UP } from "../../types/types"

const initialState = { 
    user: null,
    token: localStorage.getItem('token') ?? '',
    loading: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SIGN_IN:
           return {
            ...state,
            token: action.payload.token,
            user: action.payload.user,
           }
        case SIGN_UP:
            return {
             ...state,
             token: 'token',
             user: {
                 email: action.payload.email,
                 password: action.payload.password,
                 firstName: action.payload.firstName,
                 lastName: action.payload.lastName
                }
            }
        case SET_USER:
            return {
              ...state,
              token: action.payload
            }
        case LOGGED_OUT:
              return {
                ...initialState,
                token: null
              }
        case LOADING_INFO:
                return {
                  ...state,
                  loading: action.payload
                }
        default:
            return state;
        }
}

export default usersReducer;