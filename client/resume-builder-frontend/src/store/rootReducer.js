import { combineReducers } from 'redux';
import resumeReducer from '../features/resume/resumeReducer';
import uiReducer from '../store/slices/uiSlices';
import authReducer from '../features/auth/authReducer';

const rootReducer = combineReducers({
    resume: resumeReducer,
    ui: uiReducer,
    auth: authReducer,
});

export default rootReducer;
