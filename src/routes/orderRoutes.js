import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ListTech from '../pages/ListTech';
import ListService from '../pages/Service/ListService';
import Order from '../pages/Order/CreateOrder';

const Stack = createStackNavigator();

export default function orderRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ListService" component={ListService} />
      <Stack.Screen name="ListTech" component={ListTech} />
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
}
