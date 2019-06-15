import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {gray, bodyStandardSize} from '../common';

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
                onChangeText={this.props.onChangeText}
                placeholder={this.props.placeholder}
              />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  ask: {
    color: gray,
    fontSize: hp(bodyStandardSize),
  },
  field: {
    marginTop: hp(3),
  },
  input: {
    borderColor: gray,
    borderRadius: 8,
    borderWidth: 1,
    color: gray,
    fontSize: hp(2.5),
    padding: hp(bodyStandardSize * 0.9),
    marginTop: hp(bodyStandardSize),
  },
});