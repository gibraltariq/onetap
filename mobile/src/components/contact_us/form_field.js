import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {grayTextColor, bodyStandardSize, bodyLineHeight} from '../common';

type Props = {
    autoCorrect: Boolean;
    fieldDescription: String;
    placeholder: String;
};
export default class FormField extends Component<Props> {
  render() {
    return (
        <View style={styles.field}>
            <Text style={styles.ask}>{this.props.fieldDescription}</Text>
            <TextInput 
                style={styles.input} 
                autoCorrect={this.props.autoCorrect}
                keyboardType={this.props.keyboardType}
                placeholder={this.props.placeholder}
              />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  ask: {
    color: grayTextColor,
    fontSize: hp(bodyStandardSize),
  },
  field: {
    marginTop: hp(3),
  },
  input: {
    borderColor: grayTextColor,
    borderRadius: 8,
    borderWidth: 1,
    color: grayTextColor,
    fontSize: hp(2.5),
    padding: hp(bodyStandardSize * 0.9),
    marginTop: hp(bodyStandardSize),
  },
});