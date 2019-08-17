import { Constants } from 'expo';
import { Platform } from 'react-native';

// TODO: Have a separate dev server for Android?
const localhost =
 Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://localhost:3000';

const ENV = {
 dev: {
   // Add API keys here
   apiURL: localhost,
 },
 staging: {
   apiURL: '[your.staging.api.here]',
 },
 prod: {
   apiURL: 'https://onetap-backend.tariqpatanam.now.sh',
 },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
 // What is __DEV__ ?
 // This variable is set to true when react-native is running in Dev mode.
 // __DEV__ is true when run locally, but false when published.
 if (__DEV__) {
   return ENV.dev;
 } else if (env === 'staging') {
   return ENV.staging;
 } else {
   return ENV.prod;
 }
};

export default getEnvVars;