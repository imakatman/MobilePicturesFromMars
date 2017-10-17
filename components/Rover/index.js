import React from 'react';
// import Swiper from 'react-native-swiper';
import { StyleSheet, View, StatusBar, FlatList, TouchableHighlight, Text } from 'react-native';

class Rover extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: (new Map():Map < string, boolean >)
    };

    this._renderNavItem = this._renderNavItem.bind(this);
    this.pressNavItem   = this.pressNavItem.bind(this);
  }

  componentWillMount() {
    let rover       = this.props.name,
        data        = this.props.cameras,
        firstCamera = Object.keys(data)[0].Name,
        maxDate     = this.props.manifest.Max_Date;

    this.props.fetchPictures(rover, firstCamera, maxDate, 1);
  }

  pressNavItem = (camera: string) => {
    console.log(this.state.selected);
    console.log(camera);
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(camera, !selected.get(camera)); // toggle
      return { selected };
    }, () => console.log(this.state.selected));
  };

  _renderNavItem = ({ item }) => {
    console.log(item);
    const name = Object.keys(item)[0];
    const data = item[name];

    return (
      <Text
        style={styles.navItem}
        onPress={() => this.pressNavItem(data.Name)}
        selected={!!this.state.selected.get(data.Name)}>
        {data.Name}
      </Text>
    );
  }

  render() {
    if (this.props.isFetching) {
      return (
        <View style={styles.slide1}>
          <Text
            style={styles.heading}>
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
            data={this.props.cameras}
            keyExtractor={(item, index) => index}
            renderItem={this._renderNavItem}
          />
          {!this.props.selectedCamera ? (
              <Text>Loading...</Text>
            ) : (
              <Text>A camera has been selected</Text>
            )}
        </View>
      );
    }
  }
}

{/*<FlatList*/}
{/*/!*style={styles.camNav}*!/*/}
{/*data={}*/}
{/*keyExtractor={(item, index) => index}*/}
{/*renderItem={this._renderPhotoItem}*/}
{/*/>*/}

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
  camNav: {
    backgroundColor: '#fff'
  },
  navItem: {
    fontSize: 20,
    letterSpacing: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
});
