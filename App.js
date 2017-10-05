import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { StackNavigator } from 'react-navigation';

import { StyleSheet, Modal, Text, View } from 'react-native';
import { connect } from 'react-redux';

import configureStore from './store';
import HomeScreen from './screens/HomeScreen';

const PicturesFromMars = StackNavigator({
  HomeScreen: {
    path: "/",
    screen: HomeScreen
  }
});

class App extends React.Component {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <PicturesFromMars/>
      </Provider>
    );
  }
}

export default App;