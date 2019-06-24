import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";

import Confirmation from './src/components/confirmation/confirmation';
import Itinerary from './src/components/itinerary/itinerary';
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

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <AppContainer />
      <Itinerary />
    );
  }
}
