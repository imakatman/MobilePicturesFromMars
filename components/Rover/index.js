import React from 'react';
// import Swiper from 'react-native-swiper';
import { StyleSheet, View, FlatList,  TouchableHighlight, Text } from 'react-native';

// import { fetchData, selectRover } from '../actions/getData';

class Rover extends React.PureComponent {
  constructor(props){
    super(props);
  }

  render() {
    const rover = this.props.rover;
    let data = this.props.cameras[rover];
    console.log(rover);
    console.log(data);
    return (
      <View style={styles.slide1}>
        <FlatList
          data={data}
          renderItem={({data}) => <Text key={data.Name}>{data.Name}</Text>}
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
    fontSize: 30,
    fontWeight: 'bold',
  }
});
