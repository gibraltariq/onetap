import {DAY, MONTH} from './constants';
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {gray, textSmaller} from '../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Activity from './activity';
import FlightActivity from './flight_activity';
import FoodActivity from './food_activity';
import IndoorActivity from './indoor_activity';
import LodgingActivity from './lodging_activity';
import OutdoorActivity from './outdoor_activity';
import PropTypes from 'prop-types';
import moment from 'moment';

const ACTIVITY_TYPE = {
  FLIGHT: 'flight',
  FOOD: 'food',
  INDOOR: 'indoor',
  LODGING: 'lodging',
  OUTDOOR: 'outdoor',
};

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
    const datetime = new moment.utc(time)
    return datetime.format('dddd MMMM D, YYYY');
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
        secondaryDetails: activity.secondary_details,
        startTime: activity.start_time,
        title: activity.title,
        primaryDetails: activity.primary_details,
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
        case ACTIVITY_TYPE.INDOOR: {
          activityComponents.push(
            <IndoorActivity {...activityProps}/>);
          break;
        }
        case ACTIVITY_TYPE.OUTDOOR: {
          activityComponents.push(
            <OutdoorActivity {...activityProps}/>);
          break;
        }
        case ACTIVITY_TYPE.FOOD: {
          activityComponents.push(
            <FoodActivity {...activityProps}/>);
          break;
        }
        default: {
          activityComponents.push(
            <Activity {...activityProps}/>);
          break;
        }
      }
    }

    const tripDayDate = this.props.activities.length > 0 ?
      this.getDayStringFromDate(this.props.activities[0].start_time) : '';

    return (
      <View style={{marginBottom: hp(3)}}>
          <Text style={styles.date}>{tripDayDate}</Text>
          {activityComponents}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  date: {
    color: gray,
    fontSize: textSmaller,
    paddingLeft: hp(1.5),
    textTransform: 'uppercase',
  },
});