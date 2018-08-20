
import React, {Component} from 'react';
//import {StyleSheet} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import Login from './src/Login/index';
import SuperheroesList from './src/List/index';
import ContactComponent from './src/Details/index';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './src/Reducers/index';


const AppStackNavigator = StackNavigator({
  Home: { screen: Login },
  List : {screen : SuperheroesList},
  Details : {screen : ContactComponent}
});

const store = createStore(Reducers);
export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator/>
      </Provider>
     
    );
  }
}

