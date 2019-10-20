import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {bodyPrimarySize, bodySecondarySize, bodyTertiarySize, standardContainerPadding} from '../../common';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Pacman extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/pacman.png')}/>
        <Text style={styles.message}>
          Ooooh, this is exciting! Enter a vacation location to start.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      padding: hp(standardContainerPadding),
    },
    message: {
      color: 'white',
      fontSize: hp(bodyTertiarySize),
      textAlign: 'center',
    }
});