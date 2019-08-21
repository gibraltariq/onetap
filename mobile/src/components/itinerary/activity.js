import * as SMS from 'expo-sms';
import * as WebBrowser from 'expo-web-browser';

import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
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
      <View>
        {this.props.topImage ? <Image style={styles.topImage} source={this.props.topImage}/> : []}
        <View style={styles.titleBar}>
          <Text style={styles.title}>{this.props.title}</Text>
          {sideIcon}
        </View>
        {this.props.details}
      </View>
    );

    return (
        this.props.infoLink? 
          <TouchableHighlight style={{...styles.container, backgroundColor}} onPress={this._openInfoLink} onLongPress={this._openModifyActivityMessage}>
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
    topImage: {
      alignSelf: 'center',
      marginBottom: hp(1),
    },
    container: {
      marginTop: hp(2),
      paddingHorizontal,
      paddingVertical,
      shadowOffset: {height: hp(0.5)},
      shadowColor: 'black',
      shadowOpacity: 0.25,
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
      justifyContent: 'space-between',
    },
    sideIcon: {
    },
    sideIconLarge: {
      marginRight: -paddingHorizontal,
      marginVertical: -paddingVertical,
    },
});