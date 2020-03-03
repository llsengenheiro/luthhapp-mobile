import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import clientRegister from '~/pages/Client/clientRegister';
import clientList from '~/pages/Client/List';

const Stack = createStackNavigator();

export default function clientsRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="clientList" component={clientList} />
      <Stack.Screen name="clientRegister" component={clientRegister} />
    </Stack.Navigator>
  );
}
