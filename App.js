import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ParitiesList  from '../AwesomeProject/components/parties-list'

export default class App extends React.Component {
  render() {
    return (
      <ParitiesList >
       
      </ParitiesList>
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
