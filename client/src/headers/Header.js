import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Navbar} from './Navbar.js'
import {headerStyles} from './styles/headerStyles.js';

export default class Head extends Component {
  render() {
    return (
      <View>
        <Text style={headerStyles.title}>The New Joker</Text>
      </View>
    );
  }
}
