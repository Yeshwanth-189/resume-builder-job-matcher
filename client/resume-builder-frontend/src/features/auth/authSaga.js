import { call, put, takeLatest } from 'redux-saga/effects';
import { registerApi } from './authApi';
import { registerSuccess, registerFailure } from './authActions';
import { REGISTER_REQUEST } from './types';

function* handleRegister(action) {
    try {
        const response = yield call(registerApi, action.payload);
        yield put(registerSuccess(response.message));
    } catch (error) {
        yield put(registerFailure(error.response.data.error || "Registration failed"));
    }
}

export default function* authSaga() {
    yield takeLatest(REGISTER_REQUEST, handleRegister);
}
