import * as SMS from 'expo-sms';
import * as WebBrowser from 'expo-web-browser';

import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import { bodyPrimarySize, bodySecondarySize, bodyTertiarySize } from '../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import PropTypes from 'prop-types';
import {TouchableHighlight} from 'react-native-gesture-handler';
import getEnvVars from '../../environment';

const {twilioNumber} = getEnvVars();

export default class ActivityV2 extends Component {
  static propTypes  = {
    backgroundColor: PropTypes.string,
    topImage: PropTypes.number,
    title: PropTypes.string.isRequired,
    infoLink: PropTypes.string,
    startTime: PropTypes.string.isRequired,
  }

  static defaultProps = {
    backgroundColor: '#4FAFCE'
  }

  constructor(props) {
    super(props);
    this.state = {
      smsIsAvailable: false,
    };
  }

  _getHourString = (datetime) => {
    const date = new Date(datetime)
    const isPm = date.getHours() > 12;
    const amPm = isPm ? 'PM': 'AM';
    const hour = isPm ? date.getHours() - 12 : date.getHours();
    return hour + ' ' + amPm;
  }

  _openInfoLink = () => {
    WebBrowser.openBrowserAsync(this.props.infoLink);
  }

  _openModifyActivityMessage = async () => {
    if (this.state.smsIsAvailable) {
      const { result } = await SMS.sendSMSAsync(
        twilioNumber,
        `I\'d like to remove this activity: \"${this.props.title}\"`
      );
    } else {
      // TODO: Gracefully fail.
      console.log(`No SMS service on this device.`);
    }
  }

  componentDidMount = async () => {
    let smsIsAvailable = await SMS.isAvailableAsync();
    this.setState({smsIsAvailable});
  }

  render() {
    const {backgroundColor, sideIconSource} = this.props;

    let sideIcon;
    if (sideIconSource) {
      sideIcon = <Image style={this.props.sideIconLarge ? styles.sideIconLarge : styles.sideIcon} source={sideIconSource} />;
    }

    const childComponents = (
      <View style={{...styles.container, backgroundColor}}>
        <Text style={styles.time}>{this._getHourString(this.props.startTime)}</Text>
        <Image style={styles.iconImage} source={this.props.topImage}/> 
        <View style={styles.mainContent}>
          <Text style={styles.title}>{this.props.title}</Text>
          {this.props.detail1 && <Text style={styles.detail}>{this.props.detail1}</Text>}
          {this.props.detail2 && <Text style={styles.detail}>{this.props.detail2}</Text>}
        </View>
      </View>
    );

    return (
        this.props.infoLink? 
          <TouchableHighlight onPress={this._openInfoLink} onLongPress={this._openModifyActivityMessage}>
          {childComponents}
          </TouchableHighlight> :
          <View>
            {childComponents}
          </View>
    );
  }
}

const paddingHorizontal = wp(4);
const paddingVertical = hp(1.5);

const styles = StyleSheet.create({
    iconImage: {
      height: hp(10),
      marginBottom: hp(1),
      resizeMode: 'contain',
      width: wp(15),
    },
    container: {
      alignItems: 'center',
      borderRadius: wp(3),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(2),
      paddingHorizontal,
      paddingVertical,
      shadowOffset: {height: hp(0.5)},
      shadowColor: 'black',
      shadowOpacity: 0.25,
    },
    detail: {
      color: '#EFEFEF',
      fontSize: hp(bodySecondarySize),
    },
    mainContent: {
      alignItems: 'flex-start',
      flex: 1,
      justifyContent: 'space-between',
      maxWidth: wp(40),
      minHeight: hp(10)
    },
    time: {
      color: 'white',
      fontSize: hp(bodyTertiarySize),
    },
    title: {
      color: 'white',
      fontSize: hp(bodyPrimarySize),
    },
    sideIconLarge: {
      marginRight: -paddingHorizontal,
      marginVertical: -paddingVertical,
    },
});