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
    let { dispatch, Mission_Manifest, Cameras_Data } = this.props;

    console.log(Mission_Manifest.Rovers);

    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        {
          Mission_Manifest.Rovers.map(rover =>
            <View key={rover.Name} style={styles.slide1} onTouchEnd={()=>console.log(rover.Name)}>
              <Text style={styles.text}>
                {rover.Name}
              </Text>
            </View>
          )
        }
      </Swiper>
    )
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
