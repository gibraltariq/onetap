import {Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import {THEME_PINK, bodyPrimarySize, bodySecondarySize, gray, standardContainerPadding} from '../../common';

import PropTypes from 'prop-types'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class WhatYouLike extends Component {
  static propTypes  = {}

  static navigationOptions = {}

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
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME_PINK,
        flex: 1,
    },
});