import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FormField from './form_field';

type Props = {};
export default class ContactUs extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Where can we reach you?</Text>
          <Text style={styles.explanation}>
            Drop us your phone number and we'll be in touch. Don't worry, Onetap is free until you're ready to pay.
          </Text>
        </View>
        <FormField fieldDescription={'An expert can text me at'} placeholder="+1" keyboardType={'phone-pad'}/>
        <FormField fieldDescription={'My name is'} placeholder="Boss McBosster"/>
      </View>
    );
  }
}

const grayTextColor = '#828282';
const bodyStandardSize = 1.9;
// 1.5 to deal with floating point precision.
const bodyLineHeight = 1.5 * bodyStandardSize;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: hp('10%'),
    paddingHorizontal: wp('7%'),
  },
  explanation: {
    color: grayTextColor,
    fontSize: hp(bodyStandardSize),
    fontStyle: 'italic',
    lineHeight: hp(bodyLineHeight),
    marginTop: hp(bodyStandardSize),
  },
  title: {
    color: '#4F4F4F',
    fontSize: hp('2.8%'),
    fontWeight: 'bold',
  },
});
