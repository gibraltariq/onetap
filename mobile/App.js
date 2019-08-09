import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";

import Confirmation from './src/components/confirmation/confirmation';
import Itinerary from './src/components/itinerary/itinerary';
import {Linking} from 'react-native';
import SubmitContact from './src/components/submit_contact/submit_contact';

const AppNavigator = createStackNavigator(
  {
    SubmitContact: SubmitContact,
    Confirmation: Confirmation,
  },
  {
    initialRouteName: 'SubmitContact',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  processURLEvent = (event) => this.processURL(event.url);

  processURL = (url) => {
    const {path, queryParams} = Expo.Linking.parse(url);
    // console.log(`Here is the path ${JSON.stringify(path)} and queryParams ${JSON.stringify(queryParams)}`);
  };

  componentDidMount() {
    // Handling deep links from a backgrounded state.
    Linking.addEventListener('url', this.processURLEvent);

    // Handling deep links from a non-init state.
    Linking.getInitialURL().then((url) => this.processURL(url))
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.processURLEvent);
  }

  render() {
    return (
      // <AppContainer />
      <Itinerary />
    );
  }
}
