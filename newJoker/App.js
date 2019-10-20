import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {styles} from './styles.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.titleDiv}>
        <Text style={styles.title}>The New Joker</Text>
        <Text style={styles.about}>A New Yorker Capiton Contest Game For Tweeters</Text>
      </View>
    );
  }
}


