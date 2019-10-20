import {Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import {THEME_PINK, bodyPrimarySize, bodySecondarySize, gray, standardContainerPadding} from '../../common';

import NextButton from '../next_button';
import Pacman from './pacman';
import PropTypes from 'prop-types'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class SearchLocation extends Component {
  static propTypes  = {
    navigation: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
  }


  onNext = () => {
    this.props.navigation.navigate('SubmitContact', {location: this.state.location});
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
                        keyboardType={'default'}
                        onChangeText={(location) => this.setState({location})}
                        placeholder={'Where to?'}
                        selectionColor={THEME_PINK}
                    />
                </View>
                <View style={styles.searchResults}>
                </View>
            </View>
            {!this.someTextWritten() && <Pacman/>}
            <KeyboardAvoidingView behavior='padding'>
              {this.someTextWritten() &&
                <NextButton
                  awaitingText={'Next'}
                  buttonText={'Next'}
                  isAwaiting={!this.state.location}
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
    searchBar: {
        backgroundColor: 'white',
        paddingTop: hp(5),
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