import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {darkGray, bodyLargeSize, bodyLineHeight, paddingStandard} from '../common';

type Props = {
    autoCorrect: Boolean;
    fieldDescription: String;
    placeholder: String;
};
export default class Confirmation extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('SubmitContact')}
                >
                    <Image source={require('../../assets/cancel.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Image source={require('../../assets/check.png')} />
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
        paddingHorizontal: wp(paddingStandard),
        justifyContent: 'space-between',
    },
    content: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        color: darkGray,
        fontSize: hp(bodyLargeSize),
        lineHeight: hp(bodyLineHeight * 1.25),
        textAlign: 'center',
    },
    pseudo: {
        flex: 1,
        paddingBottom: hp(paddingStandard),
    },
    topBar: {
        flex: 1,
        alignItems: 'flex-end',
        paddingTop: hp(paddingStandard),
    },
});