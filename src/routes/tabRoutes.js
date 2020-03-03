import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import clientsRoutes from '~/routes/clientsRoutes';
import SignUp from '../pages/SignUp';
import Service from '../pages/Service';
import clientRegister from '../pages/Client/clientRegister';
import homeRoutes from './homeRoutes';

const Tab = createBottomTabNavigator();

export default function tabRoutes() {
  return (
    <Tab.Navigator initialRouteName="Cliente">
      <Tab.Screen name="Home" component={homeRoutes} />
      <Tab.Screen name="Cliente" component={clientsRoutes} />
      <Tab.Screen name="Cadastro Usuário" component={SignUp} />
      <Tab.Screen name="Cadastro Cliente" component={clientRegister} />
      <Tab.Screen name="Solicitar Serviço" component={Service} />
    </Tab.Navigator>
  );
}
