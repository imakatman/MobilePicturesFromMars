import React from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchData } from '../actions/getData';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onMainNav: false
    };

    this.toggleHorizontalSwipe = this.toggleHorizontalSwipe.bind(this);
  }

  componentWillMount() {
    let { dispatch } = this.props;

    dispatch(fetchData());
  }

  toggleHorizontalSwipe(i){
    if(i === 0){
      this.setState({onMainNav: true});
    } else if (i === 1){
      this.setState({onMainNav: false});
    }
  }

  render() {
    let { dispatch, Mission_Manifest, Cameras_Data } = this.props;

    if (Mission_Manifest.isFetching) {
      return (
        <View style={styles.slide1}><Text style={styles.text}>Loading...</Text></View>
      )
    } else if (!Mission_Manifest.isFetching) {
      return (
        <Swiper
          style={styles.wrapper}
          showsPagination={false}
          loop={false}
          scrollEnabled={this.state.onMainNav}>
          {
            Mission_Manifest.Rovers.map((rover, i) =>
              <Swiper
                key={rover.name}
                horizontal={false}
                showsPagination={false}
                loadMinimal={true}
                loop={false}
                onIndexChanged={(i)=>this.toggleHorizontalSwipe(i)}>
                <View style={styles.slide1}>
                  <Text style={styles.text}> {rover.Name} </Text>
                  <Text style={styles.text}> Last Updated: {rover.Max_Date} </Text>
                  <Text style={styles.text}> Total Photos: {rover.Total_Photos} </Text>
                </View>
                <View>
                  <Text>Photos</Text>
                </View>
              </Swiper>
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
