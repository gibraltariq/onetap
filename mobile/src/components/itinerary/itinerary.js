import {DAY, MONTH} from './constants';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {bodyPrimarySize, bodySecondarySize, darkGray, detailsStyle, gray, lightGray, standardContainerPadding} from '../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import PropTypes from 'prop-types';
import TripDay from './trip_day';
import {getTrip} from '../../networking/api';

export default class Itinerary extends Component {
  static propTypes  = {
    tripId: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      activityDays: [],
      title: 'Loading...'
    };
  }

  componentDidMount() {
    getTrip(this.props.tripId).then(({tripTitle, activityDays}) => {
      if (tripTitle && activityDays) {
        this.setState({activityDays, title: tripTitle});
      }
    });
  }

  getShortDateString = (time) => {
    const date = new Date(time);
    // All month names are longer than 3 letters. See ./constants.js.
    const shortMonth = `${MONTH[date.getMonth()]}`.slice(0, 3);
    return `${DAY[date.getDay()]} ${shortMonth} ${date.getDate()}`;
  }

  getEndDate = () => {
    const activityDays = this.state.activityDays;
    if (!activityDays || !activityDays.length || !activityDays[0].length) {
      return;
    }

    const endDay = activityDays[activityDays.length - 1]
    const endActivity = endDay[endDay.length - 1]
    const endTime = endActivity.end_time || endActivity.start_time;
    return this.getShortDateString(endTime);
  }

  getStartDate = () => {
    const activityDays = this.state.activityDays;
    if (!activityDays || !activityDays.length || !activityDays[0].length) {
      return;
    }

    return this.getShortDateString(activityDays[0][0].start_time);
  }

  render() {
    let dayComponents = [];
    for (let dayIndex = 0; dayIndex < this.state.activityDays.length; dayIndex++) {
      const activities = this.state.activityDays[dayIndex];
      dayComponents.push(<TripDay activities={activities} key={dayIndex}/>);
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
              <Image style={styles.headerPhoto} source={require('../../assets/sunUmbrella.png')}/>
              <Text style={styles.title}>{this.state.title} </Text>
            </View>
            <View style={styles.headerDetails}>
              <Text style={styles.details}>{this.getStartDate()} - {this.getEndDate()}</Text>
            </View>
          </View>

        <View style={styles.timeline}>
          {dayComponents}
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingHorizontal: wp(standardContainerPadding),
      paddingVertical: hp(standardContainerPadding),
    },
    content: {
      flex: 1,
      flexDirection: 'row',
    },
    details: {
      color: gray,
      fontSize: hp(bodyPrimarySize),
    },
    header: {
      marginBottom: hp(4)
    },
    headerTop: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: hp(2),
    },
    headerDetails: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    headerPhoto: {
      flex: 1,
      marginRight: wp(standardContainerPadding)
    },
    title: {
      flex: 2,
      fontSize: hp(3.5),
      lineHeight: hp(4),
      textAlign: 'right',
    },
    timeline: {
      marginBottom: -hp(3),
    },
});