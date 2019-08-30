import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {bodyPrimarySize, bodySecondarySize, gray} from '../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import ActivityV2 from './activity_copy';
import FlightActivity from './flight_activity';
import LodgingActivity from './lodging_activity';
import PropTypes from 'prop-types';

const ACTIVITY_TYPE = {
  FLIGHT: 'flight',
  LODGING: 'lodging',
  INDOOR: 'indoor',
  OUTDOOR: 'outdoor',
};

const DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class TripDay extends Component {
  static propTypes  = {
    activities: PropTypes.array,
  }

  static defaultProps = {
    activities: []
  }

  constructor(props) {
    super(props);
  }

  getDayStringFromDate = (time) => {
    const date = new Date(time);
    return `${DAY[date.getDay()]} ${MONTH[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }

  render() {
    const {activities} = this.props;
    let activityComponents = [];
    for (let ind = 0; ind < activities.length; ind++) {
      const activity = this.props.activities[ind];
      const activityProps = {
        cost: activity.cost,
        infoLink: activity.info_link,
        key: ind,
        title: activity.title,
        startTime: activity.start_time,
      };

      switch(activity.type) {
        case ACTIVITY_TYPE.FLIGHT: {
          activityComponents.push(
            <FlightActivity {...activityProps}/>);
          break;
        }
        case ACTIVITY_TYPE.LODGING: {
          activityComponents.push(
            <LodgingActivity {...activityProps}/>);
          break;
        }
        default: {
          activityComponents.push(
            <ActivityV2 {...activityProps}/>);
          break;
        }
      }
    }

    const tripDayDate = this.props.activities.length > 0 ? 
      this.getDayStringFromDate(this.props.activities[0].start_time) : '';

    return (
      <View style={{marginBottom: hp(3)}}>
          <Text style={{...styles.details, ...styles.timelineDate}}>{tripDayDate}</Text>
          {activityComponents}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  details: {
    color: gray,
    fontSize: hp(bodySecondarySize)
  },
  timelineDate: {
    paddingLeft: hp(1.5),
  },
});