import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';
import 'react-native-gesture-handler';
import Routes from './routes';

import { store, persistor } from './store';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#075065" />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
