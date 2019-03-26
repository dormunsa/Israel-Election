import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Image,
  View, 
  TouchableOpacity,
} from 'react-native';

import ParitiesList  from './components/parties-list'
import { Button, Header } from 'react-native-elements';


export default class App extends React.Component {
  
  render() {
    return (
      <View>
      

      <ParitiesList >
       
      </ParitiesList>
      </View>
     
    );
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
