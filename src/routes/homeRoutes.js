import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Home';
import clientRegister from '~/pages/Client/clientRegister';
import serviceRoutes from './serviceRoutes';

const Stack = createStackNavigator();

export default function homeRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="clientRegister" component={clientRegister} />
      <Stack.Screen name="serviceRoutes" component={serviceRoutes} />
    </Stack.Navigator>
  );
}
