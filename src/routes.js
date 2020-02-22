import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import SignIn from './pages/SignIn';

import homeRoutes from './routes/homeRoutes';

const Stack = createStackNavigator();

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);

  return (
    <Stack.Navigator headerMode="none">
      {!signed ? (
        <Stack.Screen name="SignIn" component={SignIn} />
      ) : (
        <Stack.Screen name="Home" component={homeRoutes} />
      )}
    </Stack.Navigator>
  );
}
