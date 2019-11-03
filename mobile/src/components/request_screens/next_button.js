import {KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {darkGray, gray, standardContainerPadding, textLarge, textMedium, textTitle} from '../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import PropTypes from 'prop-types'

export default class NextButton extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes  = {
    buttonText: PropTypes.string.isRequired,
    disabledText: PropTypes.string,
    isDisabled: PropTypes.bool.isRequired,
  }

  render() {
    const containerStyles = {
      ...this.props.style, // passed down styles
      ...styles.container,
      ...(this.props.isDisabled ?
        styles.disabledButton :
        styles.enabledButton)
    };

    return (
      <TouchableOpacity
        style={containerStyles}
        disabled={this.props.isDisabled}
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.props.isDisabled ? this.props.disabledText : this.props.buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(2.5),
    backgroundColor: '#EF495B',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: textTitle,
    letterSpacing: wp(1),
    textTransform: 'uppercase',
  },
  disabledButton: {
    opacity: 0.25,
  },
});