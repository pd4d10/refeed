import React, { Component } from 'react'
import { View, Button } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Accounts extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Accounts',
    headerRight: (
      <View>
        {/* <MaterialIcons name="add" size={16} /> */}
        <Button
          onPress={() => {
            navigation.navigate('add')
          }}
          title="Add"
        />
      </View>
    ),
  })

  render() {
    return <View />
  }
}
