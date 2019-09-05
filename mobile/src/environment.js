import { Constants } from 'expo';
import { Platform } from 'react-native';

// TODO: Have a separate dev server for Android?
const localhost =
 Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://localhost:3000';

const ENV = {
 dev: {
   // Add API keys here
   apiUrl: localhost,
   twilioNumber: '+1500555000',
 },
 staging: {
   apiUrl: '[your.staging.api.here]',
   twilioNumber: '+1500555000',
 },
 prod: {
   apiUrl: 'https://onetap-backend.tariqpatanam.now.sh',
   twilioNumber: '+1500555000',
 },
};

const getEnvVars = () => {
 // What is __DEV__ ?
 // This variable is set to true when react-native is running in Dev mode.
 // __DEV__ is true when run locally, but false when published.
 if (__DEV__) {
   return ENV.dev;
 } else {
   return ENV.prod;
 }
};

export default getEnvVars;