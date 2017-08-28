import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from './screens/home';
import List from './screens/list';
import Detail from './screens/detail';
import Settings from './screens/settings'

export default StackNavigator({
  Home: {
    screen: TabNavigator(
      {
        Home: {
          screen: Home,
        },
        Settings: {
          screen: Settings,
        },
      },
      {
        tabBarOptions: {
          activeTintColor: '#e91e63',
        },
      }
    ),
  },
  List: { screen: List },
  Detail: { screen: Detail },
});
