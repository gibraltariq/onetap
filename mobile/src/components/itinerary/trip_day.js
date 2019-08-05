import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Activity from './activity';
import FlightActivity from './flight_activity';
import PropTypes from 'prop-types';
import {detailsStyle} from '../common';

const ACTIVITY_TYPE = {
  FLIGHT: 'flight',
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
      // console.log(`Looping through a set of activities`);
      const activity = this.props.activities[ind];
      switch(activity.type) {
        case ACTIVITY_TYPE.FLIGHT: {
          activityComponents.push(
            <FlightActivity title={activity.title} key={ind}/>);
          break;
        }
        default: {
          activityComponents.push(
            <Activity key={ind} title={activity.title}/>);
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
  details: detailsStyle,
  timelineDate: {
    paddingLeft: hp(1.5),
  },
});