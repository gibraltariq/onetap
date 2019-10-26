import {Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import {THEME_PINK, THEME_WHITE, bodyPrimarySize, bodySecondarySize, bodyTertiarySize, gray, lightGray, standardContainerPadding} from '../../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_WHITE,
    flex: 1,
    padding: wp(7),
  },
  instructions: {
    color: gray,
    fontSize: hp(2.1),
  }
});