import * as SMS from 'expo-sms';
import * as WebBrowser from 'expo-web-browser';

import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {RectButton, TouchableHighlight} from 'react-native-gesture-handler';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {textLarge, textMedium, textSmall} from '../common';

import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import getEnvVars from '../../environment';

const {twilioNumber} = getEnvVars();

export default class Activity extends Component {
  static propTypes  = {
    backgroundColor: PropTypes.string,
    topImage: PropTypes.number,
    title: PropTypes.string.isRequired,
    infoLink: PropTypes.string,
    primaryDetails: PropTypes.string,
    startTime: PropTypes.string.isRequired,
    secondaryDetails: PropTypes.string,
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

  componentDidMount = async () => {
    let smsIsAvailable = await SMS.isAvailableAsync();
    this.setState({smsIsAvailable});
  }

  _getHourString = (datetime) => {
    const date = new Date(datetime)
    const isPm = date.getUTCHours() > 12;
    const amPm = isPm ? 'PM': 'AM';
    const hour = isPm ? date.getUTCHours() - 12 : date.getUTCHours();
    return hour + ' ' + amPm;
  }

  _openInfoLink = () => {
    WebBrowser.openBrowserAsync(this.props.infoLink);
  }

  _openModifyActivityMessage = async () => {
    if (this.state.smsIsAvailable) {
      const { result } = await SMS.sendSMSAsync(
        twilioNumber,
        `I\'d like to change this activity: \"${this.props.title}\"`
      );
    } else {
      // TODO: Gracefully fail.
      console.log(`No SMS service on this device.`);
    }
  }

  _renderRightActions = (progress, dragX) => {
    const actionSize = 64;
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [actionSize, 0],
    });

    return (
      <View style={{ width: actionSize, flexDirection: 'row' }}>
        <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
          <RectButton
            style={styles.rightAction}
            onPress={this._openModifyActivityMessage}>
            <MaterialIcons name="edit" size={actionSize / 2} color="white" />
          </RectButton>
        </Animated.View>
      </View>
    );
  }

  render() {
    // TODO: Remove this.
    const {backgroundColor, sideIconSource} = this.props;

    let sideIcon;
    if (sideIconSource) {
      sideIcon = <Image style={this.props.sideIconLarge ? styles.sideIconLarge : styles.sideIcon} source={sideIconSource} />;
    }

    const content = (
      <View style={styles.subContainer}>
        <Text style={styles.time}>{this._getHourString(this.props.startTime)}</Text>
        <Image style={styles.iconImage} source={this.props.iconImage}/>
        <View style={styles.mainContent}>
          <Text style={styles.title}>{this.props.title}</Text>
          {this.props.primaryDetails && <Text style={styles.primaryDetails}>{this.props.primaryDetails}</Text>}
          {this.props.secondaryDetails && <Text style={styles.secondaryDetails}>{this.props.secondaryDetails}</Text>}
        </View>
      </View>
    );

    swipeableElement = this.props.infoLink?
      <TouchableHighlight
        onPress={this._openInfoLink}
        underlayColor='transparent'
        activeOpacity={1}
      >
        {content}
      </TouchableHighlight> :
      <View>
        {content}
      </View>;

    return (
      <Swipeable
        renderRightActions={this._renderRightActions}
        containerStyle={{...styles.container, backgroundColor}}
        overshootRight={false}
      >
        {swipeableElement}
      </Swipeable>
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
    mainContent: {
      alignItems: 'flex-start',
      flex: 1,
      justifyContent: 'space-between',
      maxWidth: wp(40),
    },
    primaryDetails: {
      color: 'rgba(230, 230, 230, 0.9)', // #E6E6E6
      fontSize: textMedium,
      paddingTop: paddingVertical,
    },
    rightAction: {
      alignItems: 'center',
      backgroundColor: 'gray',
      color: 'white',
      flex: 1,
      justifyContent: 'center',
    },
    secondaryDetails: {
      color: 'rgba(230, 230, 230, 0.9)', // #E6E6E6
      fontSize: textSmall,
      paddingTop: paddingVertical,
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