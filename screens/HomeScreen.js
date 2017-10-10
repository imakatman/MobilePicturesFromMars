import React from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
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
    let { dispatch, Mission_Manifest, Cameras_Data } = this.props;

    if (Mission_Manifest.isFetching) {
      return (
        <View style={styles.slide1}><Text style={styles.text}>Loading...</Text></View>
      )
    } else if (!Mission_Manifest.isFetching) {
      return (
        <Swiper style={styles.wrapper} showsButtons={true}>
          {
            Mission_Manifest.Rovers.map(rover =>
              <View key={rover.Name} style={styles.slide1}>
                <TouchableHighlight onPress={()=>console.log(rover.Name)} style={styles.touchable}>
                  <View>
                    <Text style={styles.text}> {rover.Name} </Text>
                    <Text style={styles.text}> Last Updated: {rover.Max_Date} </Text>
                    <Text style={styles.text}> Total Photos: {rover.Total_Photos} </Text>
                  </View>
                </TouchableHighlight>
              </View>
            )
          }
        </Swiper>
      )
    }
  }
}

function mapStoreToProps(state) {
  let { dispatch, Mission_Manifest, Cameras_Data } = state;

  return { dispatch, Mission_Manifest, Cameras_Data };
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
  touchable: {
    width: '100%',
    height: '100%'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
