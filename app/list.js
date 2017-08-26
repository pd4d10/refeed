import React, { Component } from 'react';
import { View, ActivityIndicator, Text, FlatList, TouchableOpacity } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { fetchItem } from './api';

export default class List extends Component {
  state = {
    isLoaded: false,
    items: [],
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  async componentDidMount() {
    const items = await fetchItem(this.props.navigation.state.params.id);
    this.setState({
      items,
      isLoaded: true,
    });
  }

  render() {
    const { isLoaded, items } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View>
        {isLoaded
          ? <FlatList
              data={items}
              renderItem={({ item }) =>
                <TouchableOpacity
                  onPress={() =>
                    navigate('Detail', { title: item.title, content: item.summary.content })}
                  key={item.id}
                >
                  <View style={{ margin: 10 }}>
                    <Text>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>}
            />
          : <ActivityIndicator />}
      </View>
    );
  }
}
