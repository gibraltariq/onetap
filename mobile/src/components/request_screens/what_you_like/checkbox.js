import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {THEME_PINK, THEME_WHITE, bodyPrimarySize, bodySecondarySize, bodyTertiarySize, gray, lightGray, standardContainerPadding, textMedium, textSmall} from '../../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import PropTypes from 'prop-types'

export default class Checkbox extends Component {
  static propTypes  = {
    checked: PropTypes.bool,
  }

  static defaultProps = {
    checked: false,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.checked && <Image style={styles.check} source={require('../../../assets/check.png')}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME_WHITE,
    borderRadius: wp(2.5),
    height: wp(5),
    width: wp(5),
  }
});