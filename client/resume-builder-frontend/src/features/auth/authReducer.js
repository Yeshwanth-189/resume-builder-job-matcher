import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './types';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';


const initialState = {
    loading: false,
    successMessage: null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, loading: true, error: null };
        case REGISTER_SUCCESS:
            return { ...state, loading: false, successMessage: "success" };
        case REGISTER_FAILURE:
            return { ...state, loading: false, error: action.payload };
            case LOGIN_REQUEST:
                return { ...state, loading: true, error: null };
            case LOGIN_SUCCESS:
                return { ...state, loading: false, successMessage: "success" };
            case LOGIN_FAILURE:
                return { ...state, loading: false, error: action.payload };       
        default:
            return state;
    }
};

export default authReducer;
