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
      activityDays: []
    };
  }

  componentDidMount() {
    getTrip(this.props.tripId).then((activityDays) => this.setState({activityDays}));
  }

  render() {
    let dayComponents = [];
    for (let dayIndex = 0; dayIndex < this.state.activityDays.length; dayIndex++) {
      const activities = this.state.activityDays[dayIndex];
      dayComponents.push(<TripDay activities={activities} key={dayIndex}/>);
    }
  
    // const day = 
    // <View key={1} style={{marginBottom: hp(3)}}>
    //   <Text style={{...styles.details, ...styles.timelineDate}}>Friday March 13, 8 AM</Text>
    //   {/* <FlightActivity/> */}
    //   {activityComponents}
    //   {/* <Activity 
    //     backgroundColor={'#65B888'} 
    //     sideIconSource={require('../../assets/map.png')}
    //     title={'Train to Milan City Center'}/>
    //   <Activity 
    //     backgroundColor={'#BB6BD9'} 
    //     sideIconLarge={true}
    //     sideIconSource={require('../../assets/meatloaf.png')}
    //     title={'Dinner at Luogi di Aimo'}/>
    //   <HotelActivity withImage={true}/> */}
    // </View>;
    // const days = [day];

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
              <Image style={styles.headerPhoto} source={require('../../assets/sunUmbrella.png')}/>
              <Text style={styles.title}>
                  Our Italy itinerary for you Doofiyya
              </Text>
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