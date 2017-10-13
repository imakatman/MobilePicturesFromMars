import React from 'react';
// import Swiper from 'react-native-swiper';
import { StyleSheet, View, FlatList, TouchableHighlight, Text } from 'react-native';

// import { fetchData, selectRover } from '../actions/getData';

class Rover extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rover: 'undefined',
      cameras: []
    }
  }

  componentWillMount() {
    let camerasArray = [];
    // this.props.cameras[this.props.name].map(camera => camerasArray.push(Object.keys(camera)));
    this.props.cameras[this.props.name].map(camera => console.log(Object.keys(camera)));

    this.setState({
        cameras: camerasArray
      }, () => {
        console.log(this.state.cameras);
      })
  }

  render() {
    return (
      <View style={styles.slide1}>
        <Text>{this.props.rover}</Text>
        <FlatList
          data={this.props.cameras[this.props.name]}
          renderItem={(item, i)=>
            <Text style={styles.text}>
              {item[this.state.cameras[i]].Name}
            </Text>
          }
        />
      </View>
    );
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
