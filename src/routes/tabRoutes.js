import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignUp from '../pages/SignUp';
import homeRoutes from './homeRoutes';
import orderRoutes from './orderRoutes';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

export default function tabRoutes() {
  return (
    <Tab.Navigator initialRouteName="orderRoutes">
      <Tab.Screen name="homeRoutes" component={homeRoutes} />
      <Tab.Screen name="orderRoutes" component={orderRoutes} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
