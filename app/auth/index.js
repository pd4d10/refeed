import React, { Component } from 'react'
import { WebView } from 'react-native'
import config from '../config'

export default class InoreaderAuth extends Component {
  // static navigationOptions = {
  //   headerRight: (
  //     <View>
  //       {/* <MaterialIcons name="add" size={16} /> */}
  //       <Button
  //         onPress={() => this.props.navigation.navigate("Add")}
  //         title="Add"
  //       />
  //     </View>
  //   ),
  // }

  render() {
    const CLIENT_ID = config.clientId
    const REDIRECT_URI = encodeURIComponent('refeed://welcome')
    const OPTIONAL_SCOPES = encodeURIComponent('read write')
    const CSRF_PROTECTION_STRING = 'aaa'

    return (
      <WebView
        source={{
          uri: `https://www.inoreader.com/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${OPTIONAL_SCOPES}&state=${CSRF_PROTECTION_STRING}`,
        }}
        onLoadStart={console.log}
        onLoadEnd={console.log}
        onLoad={console.log}
      />
    )
  }
}
