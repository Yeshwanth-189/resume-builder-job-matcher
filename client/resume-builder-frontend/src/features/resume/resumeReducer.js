// src/features/resume/resumeReducer.js

import { SCAN_RESUME_REQUEST, SCAN_RESUME_SUCCESS, SCAN_RESUME_FAILURE } from './types';

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SCAN_RESUME_REQUEST:
            return { ...state, loading: true, error: null };
        case SCAN_RESUME_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case SCAN_RESUME_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default resumeReducer;
