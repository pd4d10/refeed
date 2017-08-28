import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from './home';
import List from './list';
import Detail from './detail';
import Settings from './settings'

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
