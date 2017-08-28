import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchList } from '../api';

export default class Home extends Component {
  state = {
    isLoaded: false,
    list: [],
  };

  static navigationOptions = {
    title: 'All',
    headerStyle: {
      backgroundColor: '#569cd6',
    },
    headerTintColor: '#fff',
    tabBarLabel: 'All',
    tabBarIcon: ({ tintColor }) => <Icon name="feed" size={16} style={{ color: tintColor }} />,
  };

  async componentDidMount() {
    const list = await fetchList();
    this.setState({
      list,
      isLoaded: true,
    });
  }

  _keyExtractor = ({ id }) => id;

  _renderItem = ({ item, index }) =>
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('List', { id: item.id, title: item.title })}
      key={item.id}
    >
      <View style={{ margin: 10, flexDirection: 'row' }}>
        <Image source={{ uri: item.iconUrl }} style={{ width: 16, height: 16, marginRight: 4 }} />
        <Text>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>;

  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <StatusBar barStyle="light-content" />
        {this.state.isLoaded
          ? <FlatList
              data={this.state.list}
              extraData={this.state.list}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              ListEmptyComponent={<View>No data</View>}
            />
          : <ActivityIndicator />}
      </View>
    );
  }
}
