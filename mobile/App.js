import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import SubmitContact from './src/components/submit_contact/submit_contact';
import Confirmation from './src/components/confirmation/confirmation';

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
      <AppContainer />
    );
  }
}
