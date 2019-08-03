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

  render() {
    const {activities} = this.props;
    let activityComponents = [];
    for (let ind = 0; ind < activities.length; ind++) {
      const activity = this.props.activities[ind];
      switch(activity.type) {
        case ACTIVITY_TYPE.FLIGHT: {
          activityComponents.push(
            <FlightActivity key={ind}/>);
          break;
        }
        default: {
          activityComponents.push(
            <Activity key={ind} title={activity.title}/>);
          break;
        }
      }
    }

    return (
      <View style={{marginBottom: hp(3)}}>
          <Text style={{...styles.details, ...styles.timelineDate}}>Friday March 13, 8 AM</Text>
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