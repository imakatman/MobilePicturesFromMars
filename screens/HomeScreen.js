import React from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchData } from '../actions/getData';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let { dispatch } = this.props;

    dispatch(fetchData());
  }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        {/*<View style={styles.slide1} onTouchEnd={}>*/}
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        {/*<View style={styles.slide2} onTouchEnd={}>*/}
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
      </Swiper>
    )
  }
}

function mapStoreToProps(state) {
  const { dispatch } = state;

  return { dispatch };
}

export default connect(mapStoreToProps)(HomeScreen);

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
