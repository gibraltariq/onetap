import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import PropTypes from 'prop-types';

export default class Activity extends Component {
  static propTypes  = {
    backgroundColor: PropTypes.string,
    centerImage: PropTypes.element,
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    backgroundColor: '#4FAFCE'
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const backgroundColor = this.props.backgroundColor;

    return (
      <View style={{...styles.container, backgroundColor}}>
        {this.props.centerImage}
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        {this.props.detail}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop: hp(2),
      padding: hp(2),
      shadowOffset: {height: hp(1)},
      shadowColor: 'black',
      shadowOpacity: 0.25,
    },
    detail: {
      fontSize: hp(1.75),
      color: 'white',
    },
    activityDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(0.75),
    },
    centerImage: {
      alignSelf: 'center',
    },
    title: {
      color: 'white',
      fontSize: hp(2.5),
      textAlign: 'left',
    },
});