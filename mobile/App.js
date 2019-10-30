import {AppStyles, defaultHeaderTint} from './AppStyles';
import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";

import Confirmation from './src/components/request_screens/confirmation/confirmation';
import {Linking as ExpoLinking} from 'expo';
import Itinerary from './src/components/itinerary/itinerary';
import {Linking as ReactLinking} from 'react-native';
import SearchLocation from './src/components/request_screens/search_location/search_location';
import Sentry from 'sentry-expo';
import SubmitTripRequest from './src/components/request_screens/submit_trip_request/submit_trip_request';
import WhatYouLike from './src/components/request_screens/what_you_like/what_you_like';

function installLogger() {
  Sentry.enableInExpoDevelopment=true;
  Sentry.config('https://12748e3d707745dea2f393780b81628e@sentry.io/1526916').install();
}
installLogger();

const AppNavigator = createStackNavigator(
  {
    Confirmation: Confirmation,
    SearchLocation: SearchLocation,
    SubmitTripRequest: SubmitTripRequest,
    WhatYouLike: WhatYouLike,
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerStyle: AppStyles.defaultHeader,
      headerTintColor: defaultHeaderTint,
      headerTitleStyle: AppStyles.defaultHeaderTitle
    },
    headerLayoutPreset: 'left',
    initialRouteName: 'WhatYouLike',
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
      // <Itinerary tripId={'rectDXI5YP6QMtdPw'}/>
      this.state.tripId ? <Itinerary tripId={this.state.tripId}/> : <AppContainer/>
    );
  }
}