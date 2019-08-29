import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Activity from './activity';

export default class HotelActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Activity
        topImage={require('../../assets/bed.png')}
        backgroundColor='#463429'
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({});