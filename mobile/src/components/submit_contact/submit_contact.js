import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FormField from './form_field';
import {bodyStandardSize, bodyLineHeight, darkGray, gray, paddingStandard} from '../common';
import {submitContact} from '../../networking/api';

type Props = {};
export default class SubmitContact extends Component<Props> {
  submitContact() {
    submitContact().then(movies => {
      console.log(movies);
      this.props.navigation.navigate('SubmitConfirmation');
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Where can we reach you?</Text>
            <Text style={styles.explanation}>
              Drop us your phone number and we'll be in touch. Don't worry, Onetap is free until you're ready to pay.
            </Text>
          </View>
          <FormField 
            fieldDescription={'An expert can text me at'} 
            placeholder='+1' 
            keyboardType={'phone-pad'}/>
          <FormField 
            autoCorrect={false}
            fieldDescription={'My name is'} 
            placeholder='Salman Khan'/>
        </View>
        <KeyboardAvoidingView behavior='padding'>
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={() => this.submitContact()}>
            <Text style={styles.actionButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButton: {
    alignItems: 'center',
    backgroundColor: '#F96866',
    justifyContent: 'center',
    padding: hp(2.5),
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: hp(2.5), 
    letterSpacing: wp(1),
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  content: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    paddingVertical: hp(paddingStandard),
    paddingHorizontal: wp(paddingStandard),
  },
  explanation: {
    color: gray,
    fontSize: hp(bodyStandardSize),
    fontStyle: 'italic',
    lineHeight: hp(bodyLineHeight),
    marginTop: hp(bodyStandardSize),
  },
  title: {
    color: darkGray,
    fontSize: hp(2.8),
    fontWeight: 'bold',
  },
});