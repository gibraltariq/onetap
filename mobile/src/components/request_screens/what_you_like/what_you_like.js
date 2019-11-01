import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THEME_PINK, THEME_WHITE, gray, standardContainerPadding, textMedium} from '../../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import { FlatList } from 'react-native-gesture-handler';
import {Set as ISet} from 'immutable';
import Interest from './interest';
import NextButton from '../next_button';
import PropTypes from 'prop-types'
import {SafeAreaView} from 'react-navigation';

const INTEREST_TYPES = [
  {
    name: 'Monuments',
    imageSrc: require('../../../assets/museum.png'),
  },
  {
    name: 'Nature',
    imageSrc: require('../../../assets/museum.png'),
  },
  {
    name: 'Outdoor Sports',
    imageSrc: require('../../../assets/museum.png'),
  },
  {
    name: 'Art',
    imageSrc: require('../../../assets/museum.png'),
  },
  {
    name: 'Local Food',
    imageSrc: require('../../../assets/museum.png'),
  },
];

const MIN_INTERESTS = 2;

export default class WhatYouLike extends Component {
  static propTypes  = {}

  static navigationOptions = {
    title: 'What do you like?'
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedInterests: new ISet() // Assumes interest names WILL be unique.
    };
  }

  // onNext = () => {
  //   this.props.navigation.navigate('SubmitTripRequest', {location: this.state.location});
  // }
  _addInterest = (item) => {
    // Use Immutable sets so that state update is triggered.
    const newSelectedInterests = this.state.selectedInterests.add(item.name);
    this.setState({selectedInterests: newSelectedInterests});
  }

  _removeInterest = (item) => {
    // Use Immutable sets so that state update is triggered.
    const newSelectedInterests = this.state.selectedInterests.delete(item.name);
    this.setState({selectedInterests: newSelectedInterests});
  }


  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <Text style={styles.instructions}>Choose at least 2 interests</Text>
          <FlatList
            style={styles.interestGrid}
            columnWrapperStyle={styles.interestRow}
            data={INTEREST_TYPES}
            keyExtractor={(item,index) => 'index_' + index}
            numColumns={2}
            renderItem={({item}) =>
              <Interest
                interestName={item.name}
                imageSrc={item.imageSrc}
                addInterest={() => this._addInterest(item)}
                removeInterest={() => this._removeInterest(item)}
                />}
              />
        </View>
        <NextButton
          awaitingText={'NEXT'}
          buttonText={'NEXT'}
          isAwaiting={this.state.selectedInterests.size < MIN_INTERESTS}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_WHITE,
    flex: 1,
    paddingHorizontal: wp(standardContainerPadding),
  },
  instructions: {
    color: gray,
    fontSize: textMedium,
  },
  interestGrid: {
    paddingHorizontal: wp(2),
  },
  interestRow: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginVertical: hp(1),
  },
  safeContainer: {
    flex: 1,
  }
});