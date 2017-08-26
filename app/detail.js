import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { fetchItem } from './api';

export default class List extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  render() {
    return (
      <ScrollView>
        <HTMLView
          value={this.props.navigation.state.params.content}
          stylesheet={{
            img: {
              width: '100%',
            },
            p: {
              lineHeight: 24,
            }
          }}
        />
      </ScrollView>
    );
  }
}
