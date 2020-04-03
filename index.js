/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import * as Sentry from '@sentry/react-native';
import App from './src';
import { name as appName } from './app.json';

Sentry.init({
  dsn: 'https://e7fd12cc8e3543c0b9cab2d540e48898@sentry.io/5187770',
});

AppRegistry.registerComponent(appName, () => App);
