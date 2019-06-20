import React, {Component} from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {paddingStandard, gray} from '../common';

type Props = {};
export default class Itinerary extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <Image style={styles.headerPhoto} source={require('../../assets/sun-umbrella.png')}/>
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
          <View style={styles.content}>
            <View style={styles.timelineLine}></View>
            <View style={styles.timeline}>
              <Text style={Object.assign({}, styles.details, styles.timelineDay)}>Friday March 13, 8 AM</Text>
              <View style={styles.activity}>
                <Image style={styles.activityImage} source={require('../../assets/plane.png')}></Image>
                <Text style={styles.activityTitle}>Flight to Milan</Text>
                <View style={styles.activityDetails}>
                  <Text style={styles.activityDetail}>8 AM (PST) - 9 PM (CEST)</Text>
                  <Text style={styles.activityDetail}>$800</Text>
                </View>
              </View>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    activity: {
      alignItems: 'center',
      backgroundColor: '#56CCF2',
      flex: 1,
      shadowOffset: {height: hp(1)},
      shadowColor: 'black',
      shadowOpacity: 0.25,
    },
    activityDetail: {
      fontSize: hp(2),
      color: 'white',
    },
    activityDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    activityImage: {
    },
    activityTitle: {
      fontSize: hp(3),
      color: 'white',
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingHorizontal: wp(paddingStandard),
      paddingVertical: hp(paddingStandard),
    },
    content: {
      flex: 1,
      flexDirection: 'row',
    },
    details: {
      color: gray,
      fontSize: hp(2)
    },
    header: {
      paddingBottom: hp(4)
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
      marginRight: wp(paddingStandard)
    },
    title: {
      flex: 2,
      fontSize: hp(3),
      lineHeight: hp(4),
      textAlign: 'right',
    },
    timeline: {
      flex: 11,
    },
    timelineDay: {
      paddingBottom: hp(1),
    },
    timelineLine: {
      justifyContent: 'flex-start',
      flex: 1,
    }
});