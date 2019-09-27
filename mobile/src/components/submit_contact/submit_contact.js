import {KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {darkGray, gray, standardContainerPadding, textLarge, textMedium, textTitle} from '../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import FormField from './form_field';
import {submitContact} from '../../networking/api';

export default class SubmitContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      isLoading: false,
    };
  }

  submitContact(name, phoneNumber) {
    this.setState({isLoading: true});
    submitContact(name, phoneNumber).then(response => {
      this.setState({isLoading: false});
      // TODO: Properly inform user of bad response.
      if (!response) return;
      this.props.navigation.navigate('Confirmation');
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Where can we reach you?</Text>
            <Text style={styles.explanation}>
              So we can get your preferences and send you an itinerary!
            </Text>
          </View>
          <View style={styles.form}>
            <FormField
              fieldDescription={'My number is'} 
              keyboardType={'phone-pad'}
              onChangeText={(phoneNumber) => this.setState({phoneNumber})}
              placeholder='+1' />
            <FormField
              autoCorrect={false}
              fieldDescription={'My name is'} 
              onChangeText={(name) => this.setState({name})}
              placeholder='Salman Khan'/>
          </View>
        </View>
        <KeyboardAvoidingView behavior='padding'>
          <TouchableOpacity
            style={this.state.isLoading ? 
              {...styles.disabledButton, ...styles.button} : 
              {...styles.enabledButton, ...styles.button}}
            disabled={this.state.isLoading}
            onPress={() => this.submitContact(this.state.name, this.state.phoneNumber)}>
            <Text style={styles.buttonText}>{this.state.isLoading ? '...sending' : 'submit'}</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp(2.5),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: textTitle, 
    letterSpacing: wp(1),
    textTransform: 'uppercase',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  content: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    paddingVertical: hp(10),
    paddingHorizontal: wp(standardContainerPadding),
  },
  disabledButton: {
    backgroundColor: '#6A6A6A',
  },
  enabledButton: {
    backgroundColor: '#EF495B',
  },
  explanation: {
    color: gray,
    fontSize: textLarge,
    marginTop: hp(1),
  },
  form: {
    marginTop: hp(3),
  },
  title: {
    color: darkGray,
    fontSize: textTitle,
    fontWeight: 'bold',
  },
});