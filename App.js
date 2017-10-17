import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import { StyleSheet, Modal, Text, View } from 'react-native';

import store from './store';
import HomeScreen from './screens/HomeScreen';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen/>
      </Provider>
    );
  }
}

export default App;