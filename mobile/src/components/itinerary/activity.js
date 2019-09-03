import * as SMS from 'expo-sms';
import * as WebBrowser from 'expo-web-browser';

import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import { bodyPrimarySize, bodySecondarySize, bodyTertiarySize, textLarge, textMedium } from '../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import PropTypes from 'prop-types';
import {TouchableHighlight} from 'react-native-gesture-handler';
import getEnvVars from '../../environment';

const {twilioNumber} = getEnvVars();

export default class Activity extends Component {
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
      <View style={styles.subContainer}>
        <Text style={styles.time}>{this._getHourString(this.props.startTime)}</Text>
        <Image style={styles.iconImage} source={this.props.iconImage}/>
        <View style={styles.mainContent}>
          <Text style={styles.title}>{this.props.title}</Text>
          {this.props.details && this.props.details.map((detail, index)=> {
            return <Text style={styles.detail} key={index}>{detail}</Text>;
          })}
        </View>
      </View>
    );

    return (
        this.props.infoLink?
          <TouchableHighlight
            onPress={this._openInfoLink}
            onLongPress={this._openModifyActivityMessage}
            style={{...styles.container, backgroundColor}}
            underlayColor={backgroundColor}
            activeOpacity={0.4}>
          {childComponents}
          </TouchableHighlight> :
          <View style={{...styles.container, backgroundColor}}>
            {childComponents}
          </View>
    );
  }
}

const paddingHorizontal = wp(4);
const paddingVertical = hp(1.5);

const styles = StyleSheet.create({
    iconImage: {
      height: hp(8),
      marginBottom: hp(1),
      resizeMode: 'contain',
      width: wp(15),
    },
    container: {
      borderRadius: wp(3),
      marginTop: hp(2),
      paddingHorizontal,
      paddingVertical,
      shadowOffset: {height: hp(0.5)},
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowRadius: wp(3),
    },
    detail: {
      color: '#EFEFEF',
      fontSize: textMedium,
      paddingTop: hp(1.25),
    },
    mainContent: {
      alignItems: 'flex-start',
      flex: 1,
      justifyContent: 'space-between',
      maxWidth: wp(40),
    },
    subContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    time: {
      color: 'white',
      fontSize: textMedium,
    },
    title: {
      color: 'white',
      fontSize: textLarge,
    },
    sideIconLarge: {
      marginRight: -paddingHorizontal,
      marginVertical: -paddingVertical,
    },
});