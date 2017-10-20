import React from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, View, StatusBar, FlatList, TouchableHighlight, Text } from 'react-native';

import Pictures from '../Pictures';

class Rover extends React.PureComponent {
  constructor(props) {
    super(props);

    this._renderNavItem = this._renderNavItem.bind(this);
    this.pressNavItem   = this.pressNavItem.bind(this);
  }

  componentWillMount(){
    this.props.fetchMaxDatePicsFromAllCams(this.props.name);
  }

  // componentWillReceiveProps(nextProps){
    // this.setState((prevState) => {
    //   let data = {};
    //   for(let state of prevState){
    //     // if(state !== prevState){
    //     //   data[state] =
    //     // }
    //     console.log(state);
    //   }
    // })
  // }

  pressNavItem = (camera: string) => {
    // this.props.fetchPictures(this.props.name, camera);
  };

  _renderNavItem = ({ item }) => {
    return (
      <Text
        style={styles.navItem}
        onPress={() => this.pressNavItem(item.Name)}>
        {item.Name}
      </Text>
    );
  }

  render() {
    // let navigation = this.props.cameras.unshift("Latest");
    let navigation = this.props.cameras;
    console.log(this.props.cameras);

    if (this.props.isFetching) {
      return (
        <View style={styles.slide1}>
          <Text
            style={[styles.heading, styles.marsOrange]}>
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
            data={navigation}
            keyExtractor={(item, index) => index}
            renderItem={this._renderNavItem}
          />
          <Swiper
            showsPagination={false}
            loadMinimal={true}
            loop={false}>
            {this.props.cameras.map(camera =>
              <Pictures
                key={camera.Name}
                {...camera}/>
            )}
          </Swiper>
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
  marsOrange: {
    color: '#a74808',
  },
  camNav: {
    backgroundColor: '#fff',
  },
  navItem: {
    flex: 0.5,
    fontSize: 20,
    letterSpacing: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
});
