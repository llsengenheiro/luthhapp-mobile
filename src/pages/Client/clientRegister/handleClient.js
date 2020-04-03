import { Alert } from 'react-native';
import * as Sentry from '@sentry/react-native';
import api from '~/services/api';

export async function ClientUp(name, cellphone, address, contract) {
  try {
    // console.tron.log(name, cellphone, address, contract);
    await api.post('clients', {
      name,
      address,
      cellphone,
      contract,
    });
    Alert.alert('Sucsso', 'Cadastro realizado.');
    //  console.tron.log(response);
    return true;
  } catch (error) {
    Sentry.captureException(error);
    Alert.alert(
      'Falha no Cadastro',
      `Verifique o preenchimento dos dados. ${error}`
    );
  }
}
