import {KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {darkGray, gray, standardContainerPadding, textLarge, textMedium, textTitle} from '../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class NextButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.isAwaiting ?
            {...styles.disabledButton, ...styles.button} :
            {...styles.enabledButton, ...styles.button}}
        disabled={this.props.isAwaiting}
        onPress={this.props.onPress}>
      <Text style={styles.buttonText}>{this.props.isAwaiting ? this.props.awaitingText : this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(2.5),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: textTitle, 
    letterSpacing: wp(1),
    textTransform: 'uppercase',
  },
  disabledButton: {
    backgroundColor: '#6A6A6A',
  },
  enabledButton: {
    backgroundColor: '#EF495B',
  },
  explanation: {
    color: gray,
    fontSize: textLarge,
    marginTop: hp(1),
  },
});