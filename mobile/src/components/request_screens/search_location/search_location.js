import {Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import {THEME_PINK, bodyPrimarySize, bodySecondarySize, gray, standardContainerPadding} from '../../common';

import {Header} from 'react-navigation';
import NextButton from '../next_button';
import Pacman from './pacman';
import PropTypes from 'prop-types'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class SearchLocation extends Component {
  static propTypes  = {
    navigation: PropTypes.object.isRequired,
  }

  static navigationOptions = {
    header: null,
    headerBackTitle: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
  }


  onNext = () => {
    this.props.navigation.navigate(
      'WhatYouLike',
      {tripRequest: {location: this.state.location}});
  }

  someTextWritten = () => {
    return this.state.location.length > 0;
  }

  render() {
    return (
      <View style={{
        ...styles.container,
        backgroundColor: this.someTextWritten() ? '#F2F2F2': THEME_PINK}}>
          <View style={styles.top}>
            <View style={styles.searchBar}>
              <TextInput style={styles.searchInput}
                autoFocus={true}
                keyboardType={'default'}
                onChangeText={(location) => this.setState({location})}
                placeholder={'Where to?'}
                selectionColor={THEME_PINK}
              />
            </View>
              <View style={styles.searchResults}>
              </View>
          </View>
          <Pacman isExcited={this.someTextWritten()}/>
          <KeyboardAvoidingView
            style={this.someTextWritten() ? {} : styles.buttonNoTextWritten}
            behavior='padding'>
            {<NextButton
              disabledText={'Next'}
              buttonText={'Next'}
              isDisabled={!this.someTextWritten()}
              onPress={this.onNext}/>
            }
          </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: THEME_PINK,
      flex: 1,
    },
    buttonNoTextWritten: {
      opacity: 0,
    },
    searchBar: {
      backgroundColor: 'white',
      paddingTop: hp(standardContainerPadding),
    },
    searchInput: {
      color: gray,
      backgroundColor: 'white',
      fontSize: hp(bodyPrimarySize),
      padding: hp(bodySecondarySize * 0.9),
    },
    top: {
      flex: 1,
    },
});