import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import 'react-native-gesture-handler';
import App from './App';

import store from './store';

// import { Container } from './styles';

export default function Index() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#075065" />
      <App />
    </Provider>
  );
}
