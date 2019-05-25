import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
        <View>
          <Text style={styles.ask}>An expert can text me at.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: hp('10%'),
    paddingHorizontal: wp('7%'),
  },
  title: {
    color: '#4F4F4F',
    fontSize: hp('2.8%'),
    fontWeight: 'bold',
    marginBottom: hp('1.9%')
  },
  explanation: {
    color: "#828282",
    fontSize: hp('1.9%'),
    fontStyle: 'italic',
    lineHeight: hp('2.8%%'),
  }
});
