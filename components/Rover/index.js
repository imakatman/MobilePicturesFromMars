import React from 'react';
// import Swiper from 'react-native-swiper';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

// import { fetchData, selectRover } from '../actions/getData';

class Rover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let { dispatch, Mission_Manifest, Cameras_Data } = this.props;
    return(
      <View style={styles.slide1}>
        <Text style={styles.text}>
          {this.props.name}
        </Text>
      </View>
    )
  }
}

export default Rover;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
