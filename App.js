/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

import rootReducer from './src/reducers';


class App extends React.Component  {

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyACUKi8Pa-CGmoN-vPD_eXKUN1aGYrvn80",
      authDomain: "employeeapp-49e20.firebaseapp.com",
      databaseURL: "https://employeeapp-49e20.firebaseio.com",
      projectId: "employeeapp-49e20",
      storageBucket: "",
      messagingSenderId: "204230173150",
      appId: "1:204230173150:web:8bb6d227cf13ede651bd4f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  
  render() {
    //1st argument is the rootReducer
    //2nd argument is the default state if we want to pass some
    //3rd argument is the middleware that act as the store enhancer.

    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
       
         <Router />
      
      </Provider>
     
    );

  }
  
};

const styles = StyleSheet.create({
  
  
});

export default App;
