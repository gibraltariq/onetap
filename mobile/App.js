
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ContactUs from './src/components/contact_us/contact_us';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ContactUs />
    );
  }
}