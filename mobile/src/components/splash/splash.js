import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Splash extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={styles.logoImage} source={require('../../assets/logo.png')}/>
          <Text style={styles.logoText}>Your travel agent on demand.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F96866',
  },
  logo: {
    position: 'absolute',
    top: '30%',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    paddingTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
