import React, { Component } from 'react';
import firebase from 'firebase';

import Tabs from './src/components/tabs/Tabs';
import {firebaseAPI} from './src/components/config/Config';


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
