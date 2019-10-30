import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THEME_PINK, THEME_WHITE, gray, standardContainerPadding, textMedium} from '../../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Interest from './interest';
import PropTypes from 'prop-types'

export default class WhatYouLike extends Component {
  static propTypes  = {}

  static navigationOptions = {
    title: 'What do you like?'
  }

  constructor(props) {
    super(props);
    this.state = {};
  }


  onNext = () => {
    // this.props.navigation.navigate('SubmitTripRequest', {location: this.state.location});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Choose at least 2 interests</Text>
        <Interest interestName={'Monuments'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_WHITE,
    flex: 1,
    paddingHorizontal: wp(standardContainerPadding),
    paddingVertical: hp(2),
  },
  instructions: {
    color: gray,
    fontSize: textMedium,
  },
});