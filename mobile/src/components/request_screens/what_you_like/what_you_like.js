import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THEME_PINK, THEME_WHITE, gray, standardContainerPadding, textMedium} from '../../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import { FlatList } from 'react-native-gesture-handler';
import Interest from './interest';
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

export default class WhatYouLike extends Component {
  static propTypes  = {}

  static navigationOptions = {
    title: 'What do you like?'
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedInterests: new Set() // Assumes interest names WILL be unique.
    };
  }


  onNext = () => {
    // this.props.navigation.navigate('SubmitTripRequest', {location: this.state.location});
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
            renderItem={({item, index}) =>
              <Interest
                interestName={item.name}
                imageSrc={item.imageSrc}
                selectedInterests={this.state.selectedInterests}/>}
              />
        </View>
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