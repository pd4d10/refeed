import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

export default class Settings extends Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor }) => (
      <Ionicon name="md-settings" size={16} style={{ color: tintColor }} />
    ),
  }

  render() {
    return (
      <ScrollView>
        <View />
      </ScrollView>
    )
  }
}
