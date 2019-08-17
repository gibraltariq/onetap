import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";

import Confirmation from './src/components/confirmation/confirmation';
import {Linking as ExpoLinking} from 'expo';
import Itinerary from './src/components/itinerary/itinerary';
import {Linking as ReactLinking} from 'react-native';
import Sentry from 'sentry-expo';
import SubmitContact from './src/components/submit_contact/submit_contact';

function installLogger() {
  Sentry.enableInExpoDevelopment=true;
  Sentry.config('https://12748e3d707745dea2f393780b81628e@sentry.io/1526916').install();
}
installLogger();

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
  constructor(props) {
    super(props);
    this.state = {
      tripId: '',
    };
  }

  processURLEvent = (event) => this.processURL(event.url);

  processURL = (url) => {
    const {path, queryParams} = ExpoLinking.parse(url);
    const tripId = queryParams.tripId;

    if (path === 'itinerary' && tripId) {
      this.setState({tripId})
    }
  };

  installDeepLinkHandlers = () => {
    // Handling deep links from a backgrounded state.
    ReactLinking.addEventListener('url', this.processURLEvent);

    // Handling deep links from a non-init state.
    ReactLinking.getInitialURL().then((url) => this.processURL(url))
  }

  uninstallDeepLinkHandlers = () => {
    ReactLinking.removeEventListener('url', this.processURLEvent);
  }

  componentDidMount() {
    this.installDeepLinkHandlers();    
  }

  componentWillUnmount() {
    this.uninstallDeepLinkHandlers();
  }

  render() {
    // TOOD: Explicitly wait for deep link processing before loading AppContainer.
    return (
      <Itinerary tripId={'recuKM4pqk1lcF0te'}/>
      // this.state.tripId ? <Itinerary tripId={this.state.tripId}/> : <AppContainer/>
    );
  }
}