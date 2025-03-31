import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './types';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';
// Action to trigger the registration process
export const registerRequest = (userData) => ({
    type: REGISTER_REQUEST,
    payload: userData
});

// Action dispatched when registration succeeds
export const registerSuccess = (message) => ({
    type: REGISTER_SUCCESS,
    payload: message
});

// Action dispatched when registration fails
export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error
});

export const loginRequest = (userData) => ({
    type: LOGIN_REQUEST,
    payload: userData
});

// Action dispatched when registration succeeds
export const loginSuccess = (message) => ({
    type: LOGIN_SUCCESS,
    payload: message
});

// Action dispatched when registration fails
export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
});