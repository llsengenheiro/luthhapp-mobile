import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Manage from '~/pages/Manage';
import clientRegister from '~/pages/Client/clientRegister';
import SignUp from '~/pages/SignUp';

const Stack = createStackNavigator();

export default function manageRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Manage" component={Manage} />
      <Stack.Screen name="clientRegister" component={clientRegister} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
