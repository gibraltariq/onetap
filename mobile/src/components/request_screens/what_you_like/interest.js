import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {THEME_PINK, THEME_WHITE, bodyPrimarySize, bodySecondarySize, bodyTertiarySize, gray, lightGray, standardContainerPadding, textMedium, textSmall} from '../../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import PropTypes from 'prop-types'

export default class Interest extends Component {
  static propTypes  = {
    interestName: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  _onSelected = () => {
    this.setState((state, props) => ({isSelected: !state.isSelected}));
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onSelected}>
        <View style={[
            styles.container,
            this.state.isSelected ? styles.containerSelected : styles.containerUnselected
          ]}>
            <Image style={styles.interestIcon} source={require('../../../assets/museum.png')}/>
            <Text style={styles.interestName}>{this.props.interestName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: THEME_PINK,
    borderRadius: 8,
    display: 'flex',
    height: hp(17),
    justifyContent: 'center',
    opacity: 0.5,
    paddingHorizontal: wp(2.6),
    paddingVertical: hp(1.2),
    width: wp(35),
  },
  containerSelected: {
    borderColor: THEME_WHITE,
    opacity: 1,
  },
  interestIcon: {
    height: hp(10),
    marginBottom: hp(1.4),
    resizeMode: 'contain',
    width: wp(20),
  },
  interestName: {
    color: THEME_WHITE,
    fontWeight: 'bold',
    fontSize: textSmall,
  },
});