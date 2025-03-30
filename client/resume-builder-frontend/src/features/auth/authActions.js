import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './types';

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
