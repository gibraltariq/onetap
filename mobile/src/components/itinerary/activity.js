import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {gray, paddingStandard} from '../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

type Props = {};
export default class Activity extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.activityImage} source={require('../../assets/plane.png')}></Image>
        <Text style={styles.activityTitle}>Flight to Milan</Text>
        <View style={styles.activityDetails}>
            <Text style={styles.activityDetail}>8 AM (PST) - 9 PM (CEST)</Text>
            <Text style={styles.activityDetail}>$800</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#56CCF2',
      marginTop: hp(2),
      paddingVertical: hp(2),
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
});