import React, { Component } from 'react';
import firebase from 'firebase';
import OneSignal from 'react-native-onesignal';

import { firebaseAPI } from './src/Config';

import Tabs from './src/Components/Tabs/Tabs'

export default class App extends Component {

    componentWillMount() {
          // Initialize Firebase
          firebase.initializeApp(firebaseAPI);
    }

  render() {
    return (
      <Tabs />
    );
  }
}
