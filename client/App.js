import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import {appStyles} from './appStyles.js';
import Head from './src/headers/Header.js';
import Navbar from './src/headers/Navbar.js';
import {PreAuthContainer, PostAuthContainer} from './navigator.js'

export default class App extends Component {
  state = {
    auth: false
  }
  render() {
    return (
      <>
        <StatusBar hidden={true}/>
        <Head/>
        {this.state.auth ? <PostAuthContainer/> : <PreAuthContainer/>}
      </>
    )
  }
}
