import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import MainScreen from '../MainScreen';
import Friends from './Friends';
import Recents from './Recents';
import Profile from './Profile';
import SelfPhotoDetails from '../InnerViews/SelfPhotoDetails';


const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    SelfPhotoDetails: SelfPhotoDetails
  }

);

const tabNavigator = createBottomTabNavigator(
  {
    // Define the tabs available
    MainScreen: MainScreen,
    Friends: Friends,
    Recents: Recents,
    Profile: ProfileStack

  },

  {

    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
      showIcon: true,
      scrollEnabled: true,
      showLabel: false,

    },
  }
);


export default createAppContainer(tabNavigator)