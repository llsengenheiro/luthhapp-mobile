import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Service from '~/pages/Service';
import clientList from '~/pages/Client/List';

const Stack = createStackNavigator();

export default function serviceRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="clientList" component={clientList} />
      <Stack.Screen name="Service" component={Service} />
    </Stack.Navigator>
  );
}
