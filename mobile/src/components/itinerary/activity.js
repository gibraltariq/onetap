import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
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
    const {backgroundColor, backgroundImage, sideIconSource} = this.props;

    let sideIcon;
    if (sideIconSource) {
      sideIcon = <Image style={styles.sideIcon} source={sideIconSource} />;
    }

    const childComponents = (
      <View>
        {this.props.topImage}
        <View style={styles.titleBar}>
          <Text style={styles.title}>{this.props.title}</Text>
          {sideIcon}
        </View>
        {this.props.details}
      </View>
    );

    return (
      <View>
        {backgroundImage ? (
          <ImageBackground 
            source={this.props.backgroundImage} 
            style={{...styles.container, width: '100%', height: '100%'}}>
            {childComponents}
          </ImageBackground>
        ) : (
          <View style={{...styles.container, backgroundColor}}>
            {childComponents}
          </View>
        )}
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