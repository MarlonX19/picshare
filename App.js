import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
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
