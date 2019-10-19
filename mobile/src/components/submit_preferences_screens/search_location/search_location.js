import {KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {bodyPrimarySize, bodySecondarySize, gray, standardContainerPadding} from '../../common';

import NextButton from '../next_button';
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

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.searchBar}>
                    <TextInput style={styles.searchInput} 
                        keyboardType={'default'}
                        onChangeText={(location) => this.setState({location})}
                        placeholder={'Where to?'}
                    />
                </View>
                <View style={styles.searchResults}>
                </View>
                <View style={styles.pacman}>
                    {/* Should be keyboard avoiding view */}
                </View>
            </View>
            <NextButton 
                awaitingText={'Next'} 
                buttonText={'Next'} 
                isAwaiting={!this.state.location}
                onPress={this.onNext}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F96866',
        flex: 1,
        // padding: hp(standardContainerPadding),
    },
    top: {
        flex: 1,
    },
    searchBar: {
        // borderColor: 'white',
        // borderRadius: 8,
        // borderWidth: 1,
        // marginTop: hp(1),
        backgroundColor: 'white',
        paddingTop: hp(5),
    },
    searchInput: {
        color: gray,
        backgroundColor: 'white',
        fontSize: hp(bodyPrimarySize),
        padding: hp(bodySecondarySize * 0.9),
    }
});