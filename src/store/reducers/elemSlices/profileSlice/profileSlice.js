import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../../../services/api"
import { LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON } from "../authSlice/authSlice";

export const login = createAsyncThunk(
    'profile/login',
    async (dataInfo, {dispatch, rejectWithValue}) => {
        try{
            dispatch({
                type: LOADER_DISPLAY_ON,
            });
            const response = await api.auth.login(dataInfo);
            return response.data
            
        } catch (error) {
           return rejectWithValue(error.response.data.errors.email ?? error.response.data.errors.password);
        } finally {
            dispatch({
                type: LOADER_DISPLAY_OFF,
            });
        }
    }
)

export const signIn = createAsyncThunk(
    'profile/signIn',
    async (usersData, {dispatch, rejectWithValue}) => {
        try{
            const { token, user } = usersData.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', user.email);
            // dispatch({
            //     type: SIGN_IN,
            //     payload: { user, token }
            // });
            return usersData.data
            
        } catch (error) {
           return rejectWithValue(error.response.statusText);
        } 
    }
)

export const getUser = createAsyncThunk(
    'profile/getUser',
    async (_, {dispatch, rejectWithValue}) => {
        try{
        
            const response  = await api.profile.userData();
            return response.data
            
        } catch (error) {
           return rejectWithValue(error.response.statusText);
        } 
    }
)

export const logOut = createAsyncThunk(
    'profile/logOut',
    async (_, {dispatch, rejectWithValue}) => {
        try{
            localStorage.removeItem('token');
            localStorage.removeItem('user'); 
            dispatch({ type: LOGGED_OUT });
        } catch (error) {
           return rejectWithValue(error.response.statusText);
        } 
    }
)

const initialState = { 
    user: null,
    token: localStorage.getItem('token') ?? '',
    status: null,
    errors: null
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        // SIGN_IN: (state, action) => {
        //     state.token = action.payload.token;
        //     state.user = action.payload.user;
        // },
        SIGN_UP: (state, action) => {
            state.token = 'token'
            state.user.push({
                email: action.payload.email,
                password: action.payload.password,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
               }) 
        },
        SET_USER: (state, action) => {
            state.token = action.payload
        },
        LOGGED_OUT: (state) => {
            return initialState
        }
    },
    extraReducers:{
        //getUser
        [getUser.pending]: (state, action) => {
            state.status = 'getUser pending'; 
        },
        [getUser.fulfilled]: (state, action) => {
            state.status = 'getUser fulfilled';
            state.errors = null;
        },
        [getUser.rejected]: (state, action) => {
            state.errors = action.payload;
            state.status = 'getUser rejected';  
        },
        // login
        [login.pending]: (state, action) => {
            state.status = 'login pending'; 
            state.errors = action.payload || null;
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.email = action.payload.user.email;
            state.token = action.payload.token;
            state.status = 'login fulfilled';
            state.errors = null;    
        },
        [login.rejected]: (state, action) => {
            state.errors = action.payload; 
            state.status = 'login rejected';     
        },
        //signIn
        [signIn.pending]: (state, action) => {
            state.status = 'signIn pending'; 
        },
        [signIn.fulfilled]: (state, action) => {
            state.errors = null;
            state.status = 'signIn fulfilled';    
        },
        [signIn.rejected]: (state, action) => {
            state.errors = action.payload;
            state.status = 'signIn rejected';    
        },
         //logOut
         [logOut.pending]: (state, action) => {
            state.status = 'logOut pending'; 
        },
        [logOut.fulfilled]: (state, action) => {
            state.errors = null;
            state.status = 'logOut fulfilled';    
        },
        [logOut.rejected]: (state, action) => {
            state.errors = action.payload;
            state.status = 'logOut rejected';  
        }
    }
})

export const { SIGN_IN, SIGN_UP, SET_USER, LOGGED_OUT } = profileSlice.actions
export default profileSlice.reducer