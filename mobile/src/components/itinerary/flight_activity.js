import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Activity from './activity';

type Props = {};
export default class FlightActivity extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Activity
        title='Flight to Milan'
        topImage={require('../../assets/plane.png')}
        details={
            <View style={styles.activityDetails}>
                <Text style={styles.activityDetail}>8 AM (PST) - 9 PM (CEST)</Text>
                <Text style={styles.activityDetail}>$800</Text>
            </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
    activityDetail: {
      fontSize: hp(1.75),
      color: 'white',
    },
    activityDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(0.75),
    }
});