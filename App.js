import React, { Component } from 'react';
import firebase from 'firebase';


import Tabs from './src/Components/Tabs/Tabs';
import {firebaseAPI} from './src/Components/Config/Config';


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
