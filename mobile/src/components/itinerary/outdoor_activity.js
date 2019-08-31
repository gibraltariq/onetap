import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Activity from './activity';

export default class OutdoorActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Activity
        {...this.props}
        backgroundColor='#3D5849'
        iconImage={require('../../assets/mountain.png')}
      />
    );
  }
}

const styles = StyleSheet.create({});