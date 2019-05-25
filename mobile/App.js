
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Splash from './src/components/splash/splash';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Splash />
    );
  }
}