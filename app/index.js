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

const AccountsScreen = StackNavigator(
  {
    accounts: { screen: Accounts },
    add: { screen: Add },
  },
  {
    mode: 'modal',
  }
)

export default StackNavigator(
  {
    accounts: {
      screen: AccountsScreen,
    },
    starred: {
      screen: Starred,
    },
    settings: {
      screen: Settings,
    },
    list: { screen: List },
    detail: { screen: Detail },
    // add: {
    //   screen: Add,
    //   navigationOptions: {
    //     // header: null,
    //   },
    // },
    auth: { screen: Auth },
  },
  {
    headerMode: 'none',
    uriPrefix: 'refeed',
  }
)
