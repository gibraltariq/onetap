import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import ActivityV2 from './activity_copy';

export default class LodgingActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ActivityV2
        {...this.props}
        backgroundColor='#463429'
        iconImage={require('../../assets/bed.png')}
      />
    );
  }
}

const styles = StyleSheet.create({});