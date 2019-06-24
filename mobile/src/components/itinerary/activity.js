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
    const {backgroundColor, sideIconSource} = this.props;

    let sideIcon;
    if (sideIconSource) {
      sideIcon = <Image style={styles.sideIcon} source={sideIconSource} />;
    }
    return (
      <View style={{...styles.container, backgroundColor}}>
        {this.props.centerImage}
        <View style={styles.titleBar}>
          <Text style={styles.title}>{this.props.title}</Text>
          {sideIcon}
        </View>
        {this.props.detail}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    centerImage: {
      alignSelf: 'center',
    },
    container: {
      marginTop: hp(2),
      paddingHorizontal: wp(3),
      paddingVertical: hp(1.5),
      shadowOffset: {height: hp(0.5)},
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
    title: {
      color: 'white',
      fontSize: hp(2.5),
      textAlign: 'left',
    },
    titleBar: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
    },
    sideIcon: {
      marginLeft: wp(5),
    },
});