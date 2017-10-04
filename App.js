import React from 'react';
import { Provider } from 'redux';
import { persistStore } from 'redux-persist';
import { StackNavigator } from 'react-navigation';

import { StyleSheet, Modal, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { store } from './store';
import HomeScreen from './screens/HomeScreen';

// const appStore = persistStore(store);
const PicturesFromMars = StackNavigator({
  HomeScreen: {
    path: "/",
    screen: HomeScreen
  }
}, {
  initialRouteName: HomeScreen
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let {  } = this.props;

    // return (
    //   <Provider store={store}>
    //     <NativeRouter>
    //       <Route to="/" component={Home} />
    //     </NativeRouter>
    //   </Provider>
    // )
    return (
      <PicturesFromMars />
    )
  }
}

function mapStoreToProps(state) {
  // const { first_time } = state;
  //
  // return { first_time };
}

// export default connect(mapStoreToProps)(App);
export default App;