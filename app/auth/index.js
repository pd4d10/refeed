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
    const REDIRECT_URI = encodeURIComponent('refeed://list')
    // const REDIRECT_URI = encodeURIComponent('https://www.baidu.com')
    const OPTIONAL_SCOPES = encodeURIComponent('read')
    const CSRF_PROTECTION_STRING = 'aaa'

    const uri = `https://www.inoreader.com/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${OPTIONAL_SCOPES}&state=${CSRF_PROTECTION_STRING}`

    return (
      <WebView
        source={{ uri }}
        onLoadStart={() => console.log('start')}
        onLoadEnd={() => console.log('end')}
        onLoad={() => console.log('load')}
      />
    )
  }
}
