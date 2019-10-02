import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Activity from './activity';

export default class FlightActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Activity
        {...this.props}
        iconImage={require('../../assets/plane.png')}
        details={[`${this.props.cost}`]}
        backgroundColor={'#4FAFCE'}
      />
    );
  }
}
