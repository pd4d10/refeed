import React, { Component } from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Accounts from './screens/accounts'
import Add from './screens/add'
import Home from './screens/home'
import Starred from './screens/starred'
import List from './screens/list'
import Detail from './screens/detail'
import Settings from './screens/settings'
import Auth from './auth'

export default StackNavigator(
  {
    Accounts: {
      screen: Accounts,
    },
    Starred: {
      screen: Starred,
    },
    Settings: {
      screen: Settings,
    },
    List: { screen: List },
    Detail: { screen: Detail },
    Add: { screen: Add },
    Auth: { screen: Auth },
  },
  {
    uriPrefix: 'refeed',
  }
)
