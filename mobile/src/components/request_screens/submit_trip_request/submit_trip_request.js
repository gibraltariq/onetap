import {KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {THEME_WHITE, darkGray, gray, standardContainerPadding, textLarge, textMedium, textTitle} from '../../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import FormField from './form_field';
import { Header } from 'react-navigation';
import NextButton from '../next_button';
import {submitTripRequest} from '../../../networking/api';

export default class SubmitTripRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      isLoading: false,
    };
  }

  static navigationOptions = {
    title: 'Contact Info',
    headerTintColor: 'black',
  }

  _submitTripRequest(name, phoneNumber) {
    this.setState({isLoading: true});

    const curRequest = this.props.navigation.getParam('tripRequest', '');
    const tripRequest = {name, phoneNumber, ...curRequest};

    submitTripRequest(tripRequest).then(response => {
      this.setState({isLoading: false});
      // TODO: Properly inform user of bad response.
      if (!response) return;
      this.props.navigation.navigate('Confirmation');
    });
  }

  _isTextWritten = () => {
    return this.state.name.length && this.state.phoneNumber.length;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            {/* <Text style={styles.title}>Where can we reach you?</Text> */}
            <Text style={styles.explanation}>
              Drop us your contact, so we can send your itinerary!
            </Text>
          </View>
          <View style={styles.form}>
            <FormField
              autoFocus={true}
              fieldDescription={'My number is'}
              keyboardType={'phone-pad'}
              onChangeText={(phoneNumber) => this.setState({phoneNumber})}
              placeholder='7136476987' />
            <FormField
              autoCorrect={false}
              fieldDescription={'My name is'}
              onChangeText={(name) => this.setState({name})}
              placeholder='Salman Khan'/>
          </View>
        </View>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Header.HEIGHT + 40}>
          <NextButton
              disabledText={this._isTextWritten() ? 'Sending...' : 'Submit'}
              buttonText={'Submit'}
              isDisabled={this.state.isLoading || !this._isTextWritten()}
              onPress={() => this._submitTripRequest(this.state.name, this.state.phoneNumber)}/>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(2.5),
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
    backgroundColor: THEME_WHITE,
    flex: 1,
    paddingVertical: hp(1),
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
    fontSize: textMedium,
    marginTop: hp(1),
  },
  title: {
    color: darkGray,
    fontSize: textTitle,
    fontWeight: 'bold',
  },
});