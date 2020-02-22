import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import clientRoutes from '~/routes/clietsRoutes';
import SignUp from '../pages/SignUp';

const Tab = createBottomTabNavigator();

export default function homeRoutes() {
  return (
    <Tab.Navigator initialRouteName="Cliente">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cliente" component={clientRoutes} />
      <Tab.Screen name="Cadastro Usuário" component={SignUp} />
    </Tab.Navigator>
  );
}
