import React, { Component } from 'react'
import { View, Button } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Add extends Component {
  render() {
    return (
      <View>
        <Button
          title="Inoreader"
          onPress={() => {
            this.props.navigation.navigate('Auth')
          }}
        />
      </View>
    )
  }
}
