import React from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';
import { connect } from 'react-redux';

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

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    dispatch(fetchData());
  }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1} onTouchEnd={}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2} onTouchEnd={}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
      </Swiper>
    )
  }
}

function mapStoreToProps(state) {
  const {  } = state;

  return {  };
}

export default connect(mapStoreToProps)(Home);
