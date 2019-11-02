import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Home from './src/Home.js'
import Login from './src/authentication/Login.js'
import Signup from './src/authentication/Signup.js'

const preAuthNavigator = createBottomTabNavigator(
  {
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    }
  },
  {
    initialRouteName: 'Login',
    tabBarOptions: {
      activeTintColor: '#6671C2'
    }
  }
)

const postAuthNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#6671C2'
    }
  }
)

const PreAuthContainer = createAppContainer(preAuthNavigator)
const PostAuthContainer = createAppContainer(postAuthNavigator)

export {PreAuthContainer, PostAuthContainer}
