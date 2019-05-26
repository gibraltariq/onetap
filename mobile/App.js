
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import SubmitContact from './src/components/submit_contact/submit_contact';
import Splash from './src/components/splash/splash';

const AppNavigator = createStackNavigator(
  {
    SubmitContact: SubmitContact,
    Splash: Splash
  },
  {
    initialRouteName: 'SubmitContact'
  }
);

const AppContainer = createAppContainer(AppNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer />
    );
  }
}
