import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMAIL_CHANGED, PASSWORD_CHANGED, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    }
}

export const userLogin = (email, password ) => {

    return (dispatch) => {
        dispatch({ type: USER_LOGIN })
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
        });
    }
}

const loginUserFail = (dispatch) => {
    dispatch({ type: USER_LOGIN_FAIL })
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: USER_LOGIN_SUCCESS, payload: user })

    Actions.main();
}