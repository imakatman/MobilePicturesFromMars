<script src="http://localhost:19000"></script>

import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { StackNavigator } from 'react-navigation';

import { StyleSheet, Modal, Text, View } from 'react-native';

import store from './store';
import HomeScreen from './screens/HomeScreen';

const PicturesFromMars = StackNavigator({
  HomeScreen: {
    path: "/",
    screen: HomeScreen
  }
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PicturesFromMars/>
      </Provider>
    );
  }
}

export default App;