import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './home'
import List from './list'
import Detail from './detail'

export default StackNavigator({
  Home: { screen: Home },
  List: { screen: List },
  Detail: { screen: Detail }
})
