import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {bodyStandardSize, detailsStyle, gray, lightGray, standardContainerPadding} from '../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Activity from './activity';
import FlightActivity from './flight_activity';
import HotelActivity from './hotel_activity';
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
      title: 'Loading itinerary...'
    };
  }

  componentDidMount() {
    getTrip(this.props.tripId).then(({tripTitle, activityDays}) => {
      if (tripTitle && activityDays) {
        this.setState({activityDays, title: tripTitle});
      }
    });
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
              <Text style={styles.details}>2 people</Text>
              <Text style={styles.details}>•</Text>
              <Text style={styles.details}>Friday Mar 13 - Sunday Mar 22</Text>
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
    details: detailsStyle,
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
      justifyContent: 'space-between'
    },
    headerPhoto: {
      flex: 1,
      marginRight: wp(standardContainerPadding)
    },
    title: {
      flex: 2,
      fontSize: hp(3),
      lineHeight: hp(4),
      textAlign: 'right',
    },
    timeline: {
      marginBottom: -hp(3),
    },
});