import React, { Component } from 'react';
import { View, ActivityIndicator, Text, FlatList, TouchableOpacity } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { fetchItem } from './api';

export default class List extends Component {
  state = {
    isLoading: false,
    isLoaded: false,
    items: [],
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  async componentDidMount() {
    this._refresh();
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) =>
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate('Detail', {
          title: item.title,
          content: item.summary.content,
        })}
    >
      <View style={{ margin: 10 }}>
        <Text>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>;

  _refresh = () => {
    this.setState(
      {
        isLoading: true,
      },
      async () => {
        const { continuation, items } = await fetchItem(this.props.navigation.state.params.id);
        this.setState({
          items,
          continuation,
          isEnd: !continuation,
          isLoading: false,
          isLoaded: true,
        });
      }
    );
  };

  _loadMore = () => {
    if (this.state.isLoadingMore || this.state.isEnd) return;

    this.setState(
      {
        isLoadingMore: true,
      },
      async () => {
        const { continuation, items } = await fetchItem(
          this.props.navigation.state.params.id,
          this.state.continuation
        );
        this.setState({
          isLoadingMore: false,
          isEnd: !continuation,
          continuation,
          items: [...this.state.items, ...items],
        });
      }
    );
  };

  _renderFooter = () => {
    if (this.state.isLoadingMore) {
      return <ActivityIndicator />
    } else if (this.state.isEnd) {
      return <Text>No more</Text>
    } else {
      return null
    }
  }

  render() {
    const { isLoaded, continuation, isLoadingMore, items, isEnd } = this.state;
    return (
      <View style={{ backgroundColor: '#fff' }}>
        {isLoaded
          ? <FlatList
              data={items}
              extraData={items}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              ListEmptyComponent={<View>No data</View>}
              refreshing={this.state.isLoading}
              onRefresh={this._refresh}
              onEndReachedThreshold={0.2}
              onEndReached={this._loadMore}
              ListFooterComponent={this._renderFooter}
            />
          : <ActivityIndicator />}
      </View>
    );
  }
}
