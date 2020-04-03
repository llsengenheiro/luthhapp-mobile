import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import manageRoutes from './manageRoutes';
import homeRoutes from './homeRoutes';
import orderRoutes from './orderRoutes';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

export default function tabRoutes() {
  const user = useSelector(state => state.user.user);

  return (
    <Tab.Navigator initialRouteName="orderRoutes">
      <Tab.Screen name="homeRoutes" component={homeRoutes} />
      <Tab.Screen name="orderRoutes" component={orderRoutes} />
      <Tab.Screen name="Profile" component={Profile} />
      {user.perfil === 'admin' ? (
        <Tab.Screen name="manageRoutes" component={manageRoutes} />
      ) : null}
    </Tab.Navigator>
  );
}
