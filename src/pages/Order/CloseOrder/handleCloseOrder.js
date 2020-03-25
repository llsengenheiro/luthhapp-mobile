import { Alert } from 'react-native';
import api from '~/services/api';

export async function OrderDone(id, service_done, backlog) {
  try {
    const response = await api.put('orders', {
      id,
      service_done,
      backlog,
    });
    Alert.alert('Sucsso', 'Ordem de serviço finalizada.');
    console.tron.log(response);
  } catch (error) {
    Alert.alert('Falha na geração', 'Verifique o preenchimento dos dados.');
  }
}
