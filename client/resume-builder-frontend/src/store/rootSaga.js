import { all } from 'redux-saga/effects';
import resumeSaga from '../features/resume/resumeSaga';
import authSaga from '../features/auth/authSaga';

export default function* rootSaga() {
    yield all([
        resumeSaga(),
        authSaga(),
    ]);
}
