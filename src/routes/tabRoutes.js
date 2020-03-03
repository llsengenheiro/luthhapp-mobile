import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignUp from '../pages/SignUp';
import homeRoutes from './homeRoutes';
import orderRoutes from './orderRoutes';

const Tab = createBottomTabNavigator();

export default function tabRoutes() {
  return (
    <Tab.Navigator initialRouteName="orderRoutes">
      <Tab.Screen name="homeRoutes" component={homeRoutes} />
      <Tab.Screen name="orderRoutes" component={orderRoutes} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  );
}
