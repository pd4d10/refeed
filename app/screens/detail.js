import React, { Component } from 'react';
import { ScrollView, Text, FlatList, Dimensions } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { fetchItem } from '../api';

export default class Detail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerStyle: {
      backgroundColor: '#569cd6',
    },
    headerTintColor: '#fff',
  });

  render() {
    const { width } = Dimensions.get('window');
    console.log(width)

    return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <HTMLView
          value={this.props.navigation.state.params.content}
          paragraphBreak=""
          stylesheet={{
            p: {
              padding: 10,
              lineHeight: 24,
              marginTop: 10,
              marginBottom: 10,
            },
          }}
        />
      </ScrollView>
    );
  }
}