import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {bodyLineHeight, bodyPrimarySize, darkGray, standardContainerPadding} from '../../common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class Confirmation extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SearchLocation')}
                >
                    <Image source={require('../../../assets/cancel.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Image source={require('../../../assets/check.png')} />
                <Text style={styles.message}>
                    Boom, it's that simple. An agent will text you in a jiffy.
                </Text>
            </View>
            <View style={styles.pseudo} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(standardContainerPadding),
        justifyContent: 'space-between',
    },
    content: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        color: darkGray,
        fontSize: hp(bodyPrimarySize),
        lineHeight: hp(bodyLineHeight * 1.25),
        textAlign: 'center',
    },
    pseudo: {
        flex: 1,
        paddingBottom: hp(standardContainerPadding),
    },
    topBar: {
        flex: 1,
        alignItems: 'flex-end',
        paddingTop: hp(standardContainerPadding),
    },
});