import React from 'react';
// import Swiper from 'react-native-swiper';
import { StyleSheet, View, StatusBar, FlatList, TouchableHighlight, Text } from 'react-native';

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
      <Text style={styles.navItem}>
        {data.Name}
      </Text>
    );
  }

  render() {
    if (this.props.isFetching) {
      return (
        <View style={styles.slide1}>
          <Text style={styles.heading}>
            Loading...
          </Text>
        </View>
      )
    } else {
      return (
        <View style={styles.slide1}>
          <Text style={styles.heading}>{this.props.name}</Text>
          <FlatList
            style={styles.camNav}
            horizontal
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
    paddingTop: '10%',
    backgroundColor: '#000',
  },
  heading: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  camNav: {
    backgroundColor: '#fff'
  },
  navItem: {
    fontSize: 22
  }
});
