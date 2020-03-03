import { Alert } from 'react-native';
import api from '~/services/api';

export async function CreateService(userId, clientId, type, defect) {
  try {
    const response = await api.post('clients', {
      name,
      address,
      cellphone,
      contract,
    });
    Alert.alert('Sucsso', 'Cadastro realizado.');
    console.tron.log(response);
    return true;
  } catch (error) {
    Alert.alert('Falha no Cadastro', 'Verifique o preenchimento dos dados.');
  }
}
