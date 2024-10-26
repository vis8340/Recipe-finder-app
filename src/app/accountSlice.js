import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storeEmail: '',
    storePassword: '',
    isRegistered: false,
    isLoggedIn: false,
    user: null,
    message: '',
};

const accountSlice = createSlice({

    name: 'accountManager',
    initialState,
    reducers: {

        setStoreEmail: (state, action) => {
            state.storeEmail = action.payload;
        },

        setStorePassword: (state, action) => {
            state.storePassword = action.payload;
        },

        createAccount: (state, action) => {
            state.isRegistered = true;
            state.user = action.payload;
        },

        loginSuccess: (state, action) => {
            state.isRegistered = true;
            state.isLoggedIn = true;
            state.user = action.payload;
        },

        logoutSuccess: (state) => {
            state.isRegistered = true;
            state.isLoggedIn = false;
            state.user = null;
        },

        deleteAccount: (state) => {
            state.isRegistered = false;
            state.isLoggedIn = false;
            state.user = null;

        },

        setMessage: (state, action) => {
            state.message = action.payload;

        }
    }

});

export const { setStoreEmail, setStorePassword, createAccount, loginSuccess, logoutSuccess, deleteAccount, setMessage } = accountSlice.actions;
export const selectEmail = (state) => state.accountManager.storeEmail;
export const selectPassword = (state) => state.accountManager.storePassword;
export const selectUser = (state) => state.accountManager.user;
export const selectIsLoggedIn = (state) => state.accountManager.isLoggedIn;
export const selectIsRegistered = (state) => state.accountManager.isRegistered;
export const selectMessage = (state) => state.accountManager.message;

export default accountSlice.reducer;