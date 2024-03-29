import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {THEME_PINK, THEME_WHITE, bodyPrimarySize, bodySecondarySize, bodyTertiarySize, gray, lightGray, standardContainerPadding, textMedium, textSmall} from '../../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import PropTypes from 'prop-types'

export default class Interest extends Component {
  static propTypes  = {
    addInterest: PropTypes.func.isRequired,
    imageSrc: PropTypes.number.isRequired,
    interestName: PropTypes.string.isRequired,
    removeInterest: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  _onPress = () => {
    this.setState((state, props) => {
      if (state.isSelected) {
        props.removeInterest();
      } else {
        props.addInterest();
      }
      return {isSelected: !state.isSelected};
    });
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={[
            styles.container,
            this.state.isSelected ? styles.containerSelected : styles.containerUnselected
          ]}>
            <Image style={styles.interestIcon} source={this.props.imageSrc}/>
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
    opacity: 0.7,
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