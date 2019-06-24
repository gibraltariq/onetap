import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
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
      backgroundColor: '#4FAFCE',
      marginTop: hp(2),
      padding: hp(2),
      shadowOffset: {height: hp(1)},
      shadowColor: 'black',
      shadowOpacity: 0.25,
    },
    activityDetail: {
      fontSize: hp(1.75),
      color: 'white',
    },
    activityDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(0.75),
    },
    activityImage: {
      alignSelf: 'center',
    },
    activityTitle: {
      color: 'white',
      fontSize: hp(2.5),
      textAlign: 'left',
    },
});