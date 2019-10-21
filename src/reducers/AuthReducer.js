import { EMAIL_CHANGED, PASSWORD_CHANGED, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN } from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
 }

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type) {
        case EMAIL_CHANGED:
            console.log('emailchnaged case is being called');
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case USER_LOGIN:
            return { ...state, loading: true, error: '' }
        case USER_LOGIN_SUCCESS:
            return { ...state, user: action.payload, error: '', loading: false };
        case USER_LOGIN_FAIL:
            return { ...state, error: 'Authentication Failed', loading: false };
        default:
            console.log('default state is being called');
            return state;
    }
}