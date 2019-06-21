import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {gray, paddingStandard} from '../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Activity from './activity';

type Props = {};
export default class Itinerary extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
            <View style={styles.content}>
              <View style={styles.timelineSignifier}>
                <Image source={require('../../assets/arrowUp.png')}/>
                <View style={styles.timelineLine}></View>
              </View>
              <View style={styles.timeline}>
                <Text style={Object.assign({}, styles.details, styles.timelineDay)}>Friday March 13, 8 AM</Text>
                <Activity style={styles.activity}/>
                <Activity />
                <Activity />
              </View>
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
      paddingLeft: hp(1.5),
    },
    timelineLine: {
      borderLeftWidth: wp(1),
      borderColor: "#BDBDBD",
      flex: 1,
      height: 775,
      width: 1,
      marginTop: hp(0.5),
    },
    timelineSignifier: {
      alignItems: 'center',
      flex: 1,
      marginTop: hp(1),
    },
});