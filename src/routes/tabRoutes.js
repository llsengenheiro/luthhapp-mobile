import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignUp from '../pages/SignUp';
import homeRoutes from './homeRoutes';

const Tab = createBottomTabNavigator();

export default function tabRoutes() {
  return (
    <Tab.Navigator initialRouteName="Cliente">
      <Tab.Screen name="Home" component={homeRoutes} />
      <Tab.Screen name="Cadastro Usuário" component={SignUp} />
    </Tab.Navigator>
  );
}
