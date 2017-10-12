import React from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchData } from '../actions/getData';
import { selectRover } from '../actions/selected';
import Rover from '../components/Rover';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onMainNav: true,
      activeRover: undefined,
    };

    this.activateRover = this.activateRover.bind(this);
    this.toggleHorizontalSwipe = this.toggleHorizontalSwipe.bind(this);
  }

  componentWillMount() {
    let { dispatch } = this.props;

    dispatch(fetchData());
  }

  activateRover(i){
    let { Mission_Manifest } = this.props;
    let rover = Mission_Manifest.Rovers[i].Name;

    this.setState({activeRover: rover});
  }

  toggleHorizontalSwipe(i){
    let { dispatch } = this.props;

    if(i === 0){
      this.setState({onMainNav: true});
    } else if (i === 1){
      this.setState({onMainNav: false});
      dispatch(selectRover(this.state.activeRover));
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
          scrollEnabled={this.state.onMainNav}
          onIndexChanged={(i)=>this.activateRover(i)}>
          {
            Mission_Manifest.Rovers.map((rover, i) =>
              <Swiper
                key={rover.Name}
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
                <Rover rover={rover.Name} cameras={Cameras_Data.Rovers[i]}/>
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
