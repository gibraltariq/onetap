import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import ActivityV2 from './activity_copy';

export default class FoodActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ActivityV2
        {...this.props}
        backgroundColor='#8A1C7C'
        iconImage={require('../../assets/spoon.png')}
      />
    );
  }
}

const styles = StyleSheet.create({});