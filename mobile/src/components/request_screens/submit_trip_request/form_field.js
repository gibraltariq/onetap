import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {bodyPrimarySize, bodySecondarySize, gray, lightGray, textLarge, textMedium} from '../../common';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class FormField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputStyle: styles.inputBlurredStyle,
    };
  }

  render() {
    return (
        <View style={styles.field}>
            <Text style={styles.ask}>{this.props.fieldDescription}</Text>
            <TextInput
              style={[styles.inputDefaultStyle, this.state.inputStyle]}
              onFocus={() => this.setState({inputStyle: styles.inputFocusedStyle})}
              onBlur={() => this.setState({inputStyle: styles.inputBlurredStyle})}
              placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
              {...this.props}
            />
        </View>
    );
  }
}

const PLACEHOLDER_TEXT_COLOR = lightGray;

const styles = StyleSheet.create({
  ask: {
    color: gray,
    fontSize: textMedium,
  },
  field: {
    marginTop: hp(3),
  },
  inputFocusedStyle: {
    backgroundColor: 'white',
  },
  inputBlurredStyle: {
    backgroundColor: '#F2F2F2',
  },
  inputDefaultStyle: {
    color: 'black',
    borderRadius: 8,
    fontSize: textLarge,
    padding: hp(2),
    marginTop: hp(1),
  },
});