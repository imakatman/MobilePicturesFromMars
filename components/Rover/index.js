import React from 'react';
// import Swiper from 'react-native-swiper';
import { StyleSheet, View, FlatList, TouchableHighlight, Text } from 'react-native';

// import { fetchData, selectRover } from '../actions/getData';

class Rover extends React.PureComponent {
  constructor(props) {
    super(props);

    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem = ({ item }) => {
    const name = Object.keys(item)[0];
    const data = item[name];

    return (
      <Text style={styles.text}>
        {data.Name}
      </Text>
    );
  }

  render() {
    if (this.props.isFetching) {
      return (
        <View style={styles.slide1}>
          <Text style={styles.text}>
            Loading...
          </Text>
        </View>
      )
    } else {
      return (
        <View style={styles.slide1}>
          <Text style={styles.text}>{this.props.name}</Text>
          <FlatList
            data={this.props.cameras}
            keyExtractor={(item, index) => index}
            renderItem={this._renderItem}
          />
        </View>
      );
    }
  }
}

export default Rover;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  text: {
    color: '#4c4c4c',
    fontSize: 22,
    fontWeight: 'bold',
  }
});
