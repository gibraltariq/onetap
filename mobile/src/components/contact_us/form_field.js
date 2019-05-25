import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
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
                placeholder={this.props.placeholder}
                keyboardType={this.props.keyboardType}/>
        </View>
    );
  }
}

const grayTextColor = '#828282';
const bodyStandardSize = 1.9;
// 1.5 to deal with floating point precision.
const bodyLineHeight = 1.5 * bodyStandardSize;
const styles = StyleSheet.create({
  ask: {
    color: grayTextColor,
    fontSize: hp(bodyStandardSize),
  },
  field: {
    marginTop: hp(5),
  },
  input: {
    borderColor: grayTextColor,
    borderRadius: 8,
    borderWidth: 1,
    color: grayTextColor,
    fontSize: hp(3),
    padding: hp(bodyStandardSize),
    marginTop: hp(bodyStandardSize),
  },
});