import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Activity from './activity';
import ActivityV2 from './activity_copy';

export default class FlightActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ActivityV2
        {...this.props}
        iconImage={require('../../assets/plane.png')}
        details={['Bar Airways', `$${this.props.cost}`]}
      />
    );
  }
}
