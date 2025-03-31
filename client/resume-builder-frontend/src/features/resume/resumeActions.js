// src/features/resume/resumeActions.js

import { SCAN_RESUME_REQUEST, SCAN_RESUME_SUCCESS, SCAN_RESUME_FAILURE } from './types';

// Action to trigger the scan process
export const scanResumeRequest = (resumeText, jobDescriptionText) => ({
    type: SCAN_RESUME_REQUEST,
    payload: { resumeText, jobDescriptionText }
});

// Action dispatched when scan succeeds
export const scanResumeSuccess = (data) => ({
    type: SCAN_RESUME_SUCCESS,
    payload: {data}
});

// Action dispatched when scan fails
export const scanResumeFailure = (error) => ({
    type: SCAN_RESUME_FAILURE,
    payload: error
});
