import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        <View style={styles.fields}>
          <Text style={styles.ask}>An expert can text me at: </Text>
          <TextInput style={styles.input} placeholder="Pizzaaa"/>
        </View>
      </View>
    );
  }
}

const grayTextColor = '#828282';
const bodyFontSize = 1.9;
// 1.5 to deal with floating point precision.
const bodyLineHeight = 1.5 * bodyFontSize;
const styles = StyleSheet.create({
  ask: {
    color: grayTextColor,
    fontSize: hp(bodyFontSize),
  },
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: hp('10%'),
    paddingHorizontal: wp('7%'),
  },
  explanation: {
    color: grayTextColor,
    fontSize: hp(bodyFontSize),
    fontStyle: 'italic',
    lineHeight: hp(bodyLineHeight),
    marginTop: hp(bodyFontSize),
  },
  fields: {
    marginVertical: hp(5),
  },
  input: {
    borderWidth: 2,
    fontSize: bodyFontSize,
    padding: hp(1),
  },
  title: {
    color: '#4F4F4F',
    fontSize: hp('2.8%'),
    fontWeight: 'bold',
  },
});
