import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {bodyStandardSize, gray, lightGray, standardContainerPadding} from '../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Activity from './activity';
import FlightActivity from './flight_activity';
import HotelActivity from './hotel_activity';
import {getTrip} from '../../networking/api';

export default class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    // TODO: what really needs to issue the request is the link given to a user.
    getTrip().then(response => this.setState({activities: response}));
  }

  render() {
    const day = 
    <View key={1} style={{marginBottom: hp(3)}}>
      <Text style={{...styles.details, ...styles.timelineDate}}>Friday March 13, 8 AM</Text>
      <FlightActivity/>
      <Activity 
        backgroundColor={'#65B888'} 
        sideIconSource={require('../../assets/map.png')}
        title={'Train to Milan City Center'}/>
      <Activity 
        backgroundColor={'#BB6BD9'} 
        sideIconLarge={true}
        sideIconSource={require('../../assets/meatloaf.png')}
        title={'Dinner at Luogi di Aimo'}/>
      <HotelActivity withImage={true}/>
    </View>;
    const days = [day, day];

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
              <Image style={styles.headerPhoto} source={require('../../assets/sunUmbrella.png')}/>
              <Text style={styles.title}>
                  Our Italy itenirary for you Doofiyya
              </Text>
            </View>
            <View style={styles.headerDetails}>
              <Text style={styles.details}>2 people</Text>
              <Text style={styles.details}>•</Text>
              <Text style={styles.details}>Friday Mar 13 - Sunday Mar 22</Text>
            </View>
          </View>
          
          <View style={styles.timeline}>
            {days}
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
      fontSize: hp(bodyStandardSize)
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
    timelineDate: {
      paddingLeft: hp(1.5),
    },
});