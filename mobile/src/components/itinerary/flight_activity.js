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
        title={this.props.title}
        topImage={require('../../assets/plane.png')}
        infoLink={this.props.infoLink}
        detail1={'Bar Airways'}
        detail2={`$${this.props.cost}`}
      />
    );
  }
}

const styles = StyleSheet.create({
    activityDetail: {
      fontSize: hp(1.75),
      color: 'white',
    },
    activityDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(0.75),
    }
});