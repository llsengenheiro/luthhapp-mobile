import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import CreateService from '~/pages/Service/CreateService';
import clientList from '~/pages/Client/List';

const Stack = createStackNavigator();

export default function serviceRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="clientList" component={clientList} />
      <Stack.Screen name="CreateService" component={CreateService} />
    </Stack.Navigator>
  );
}
