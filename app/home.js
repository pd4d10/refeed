import React, { Component } from 'react';
import { View, StatusBar, ScrollView, Text, TouchableOpacity } from 'react-native';
import { fetchList } from './api';

export default class Home extends Component {
  state = {
    list: [],
  };

  static navigationOptions = {
    title: 'All',
    headerStyle: {
      backgroundColor: '#569cd6',
    },
    headerTintColor: '#fff',
    // headerTitleStyle: {
    //   color: '#fff'
    // }
  };

  async componentDidMount() {
    const list = await fetchList();
    this.setState({
      list,
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <ScrollView style={{ backgroundColor: '#fff' }}>
          {this.state.list.map(item =>
            <TouchableOpacity
              onPress={() => navigate('List', { id: item.id, title: item.title })}
              key={item.id}
            >
              <View style={{ margin: 10 }}>
                <Text>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    );
  }
}
