import { call, put, takeLatest } from 'redux-saga/effects';
import { registerApi, loginApi } from './authApi';
import { registerSuccess, registerFailure } from './authActions';
import { REGISTER_REQUEST } from './types';
import { LOGIN_REQUEST } from './types';


function* handleRegister(action) {
    try {
        const response = yield call(registerApi, action.payload);
        const token = response.token;
        localStorage.setItem('token', token);

        yield put(registerSuccess(response.message));

    } catch (error) {
        yield put(registerFailure(error.response.data.error || "Registration failed"));
    }
}

function* handleLogin(action) {
    try {
        const response = yield call(loginApi, action.payload);
        const token = response.token;
        localStorage.setItem('token', token);

        yield put(registerSuccess(response.message));

    } catch (error) {
        yield put(registerFailure(error.response.data.error || "Registration failed"));
    }
}


export default function* authSaga() {
    yield takeLatest(REGISTER_REQUEST, handleRegister);
    yield takeLatest(LOGIN_REQUEST, handleLogin);
}
