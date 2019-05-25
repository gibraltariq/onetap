import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class ContactUs extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Where can we reach you?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  title: {
    color: '#4F4F4F',
    fontSize: 24,
    fontWeight: 'bold',
    paddingStart: 25,
  }
});
