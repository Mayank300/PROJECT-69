import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookTran from './screens/BookTran'
import SearchScreen from './screens/SearchScreen'
import { render } from 'react-dom';
import { TextInput } from 'react-native-gesture-handler';

const TabNavigator = createBottomTabNavigator({
  Transation:{screen:BookTran},
  Search:{screen:SearchScreen},
});

const AppContainer = createAppContainer(TabNavigator);


export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
