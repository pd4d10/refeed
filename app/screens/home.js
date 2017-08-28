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
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
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

  _renderItem = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          this.setState({ list: this.state.list.map(item => ({ ...item, isOpen: !item.isOpen })) });
        }}
        key={item.label}
      >
        <View style={{ margin: 10, flexDirection: 'row' }}>
          <SimpleLineIcon
            name={item.isOpen ? 'arrow-down' : 'arrow-right'}
            size={16}
            style={{ marginRight: 4 }}
          />
          <Text>{item.label}</Text>
        </View>
      </TouchableOpacity>
      <View style={item.isOpen ? {} : { display: 'none' }}>
        <FlatList
          data={item.subscriptions}
          extraData={item.subscriptions}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderSubscription}
        />
      </View>
    </View>
  );

  _renderSubscription = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate('List', {
          id: item.id,
          title: item.title,
        })}
      key={item.id}
    >
      <View style={{ margin: 10, flexDirection: 'row' }}>
        <Image
          source={{ uri: item.iconUrl }}
          style={{ width: 16, height: 16, marginRight: 4 }}
        />
        {/* <Text>{item.title.slice(0, 1)}</Text> */}
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <StatusBar barStyle="light-content" />
        <FlatList
          data={this.state.list}
          extraData={this.state.list}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
