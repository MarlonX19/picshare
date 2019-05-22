import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';


import Tabs from './Components/Tabs/Tabs';


export default class App extends Component {

    componentWillMount() {

          // Initialize Firebase
          var config = {
            apiKey: "AIzaSyA3CLSTEZiZPcVglsmRIJwbeZxlu7AvG3w",
            authDomain: "picshare-da1dc.firebaseapp.com",
            databaseURL: "https://picshare-da1dc.firebaseio.com",
            projectId: "picshare-da1dc",
            storageBucket: "picshare-da1dc.appspot.com",
            messagingSenderId: "814433119730"
          };
          firebase.initializeApp(config);

    }

  render() {
    return (
      <Tabs />
    );
  }
}
