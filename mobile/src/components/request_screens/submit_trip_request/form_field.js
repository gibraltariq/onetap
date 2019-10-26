import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {bodyPrimarySize, bodySecondarySize, gray, textMedium} from '../../common';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class FormField extends Component {
  render() {
    return (
        <View style={styles.field}>
            <Text style={styles.ask}>{this.props.fieldDescription}</Text>
            <TextInput
                style={styles.input}
                {...this.props}
              />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  ask: {
    color: gray,
    fontSize: textMedium,
  },
  field: {
    marginTop: hp(3),
  },
  input: {
    backgroundColor: 'white',
    borderColor: gray,
    borderRadius: 8,
    borderWidth: 1,
    color: gray,
    fontSize: hp(bodyPrimarySize),
    padding: hp(bodySecondarySize * 0.9),
    marginTop: hp(1),
  },
});