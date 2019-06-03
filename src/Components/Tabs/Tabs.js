import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import MainScreen from '../MainScreen';
import Friends from './Friends';
import Profile from './Profile';
import Recents from './Recents';



const tabNavigator = (createBottomTabNavigator(
      {
        // Define the tabs available
       MainScreen: MainScreen,
       Friends: Friends,
       Recents: Recents,
       Profile: Profile

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
    )
  );

export default createAppContainer(tabNavigator)