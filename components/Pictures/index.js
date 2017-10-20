import React from 'react';
import { StyleSheet, View, StatusBar, FlatList, TouchableHighlight, Text } from 'react-native';

class Pictures extends React.PureComponent {
  constructor(props) {
    super(props);

    //this._renderItem = this._renderNavItem.bind(this);
    //this.pressItem   = this.pressNavItem.bind(this);
  }

  // pressItem = (picture: string) => {
  //
  // };

  // _renderItem = ({ item }) => {
  //   return (
  //
  //   );
  // }

  render() {
    return (
      <View style={styles.slide}>
        <Text style={styles.text}>
          Camera wassup
        </Text>
      </View>
    )
  }
}

export default Pictures;

const styles = StyleSheet.create({
  slide: {
    flex: 2,
    paddingTop: '10%',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff'
  }
});
