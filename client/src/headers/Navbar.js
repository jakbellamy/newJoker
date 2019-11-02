import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import {navbarStyles} from './styles/navbarStyles.js';

export default class Navbar extends Component {
  render() {
    return (
      <View>
        <Text style={navbarStyles.navItem}>Login</Text>
      </View>
    );
  }
}
