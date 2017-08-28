import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { fetchItem } from './api';

export default class Detail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerStyle: {
      backgroundColor: '#569cd6',
    },
    headerTintColor: '#fff',
  });

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#fff', padding: 10 }}>
        <HTMLView
          value={this.props.navigation.state.params.content}
          paragraphBreak=""
          stylesheet={{
            img: {
            },
            p: {
              lineHeight: 24,
              marginTop: 10,
              marginBottom: 10,
            }
          }}
        />
      </ScrollView>
    );
  }
}
