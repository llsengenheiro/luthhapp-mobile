import { Alert } from 'react-native';
import api from '~/services/api';

export async function CreateService(client_id, type, defect) {
  try {
    const response = await api.post('services', {
      client_id,
      type,
      defect,
      status: 'aberta',
    });
    Alert.alert('Sucsso', 'Cadastro realizado.');
    console.tron.log(response);
    return true;
  } catch (error) {
    Alert.alert('Falha no Cadastro', 'Verifique o preenchimento dos dados.');
  }
}
