// src/features/resume/resumeSaga.js

import { call, put, takeLatest } from 'redux-saga/effects';
import scanResumeApi from './resumeApi';
import { scanResumeSuccess, scanResumeFailure } from './resumeActions';
import { SCAN_RESUME_REQUEST } from './types';


function* handleScanResume(action) {
    try {
        const { resumeText, jobDescriptionText } = action.payload;
        const data = yield call(scanResumeApi, resumeText, jobDescriptionText);
        yield put(scanResumeSuccess(data));
    } catch (error) {
        yield put(scanResumeFailure(error.message));
    }
}

export default function* resumeSaga() {
    yield takeLatest(SCAN_RESUME_REQUEST, handleScanResume);
}
