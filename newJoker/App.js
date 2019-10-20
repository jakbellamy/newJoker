import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import {styles} from './styles.js';
=======

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});
>>>>>>> f3da0bd443545dd9cb74d432746d833a499ef50c

export default class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <View style={styles.titleDiv}>
        <Text style={styles.title}>The New Joker</Text>
        <Text style={styles.about}>A New Yorker Capiton Contest Game For Tweeters</Text>
=======
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
>>>>>>> f3da0bd443545dd9cb74d432746d833a499ef50c
      </View>
    );
  }
}

<<<<<<< HEAD

=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
>>>>>>> f3da0bd443545dd9cb74d432746d833a499ef50c
