import { Alert } from 'react-native';
import api from '~/services/api';

export async function AceptOrder(id) {
  let response;
  try {
    response = await api.put('order/technical/accept', {
      id,
    });
    Alert.alert('Sucsso', 'Ordem de serviço aceita');
  } catch (error) {
    Alert.alert('Falha no Aceite', `${response.error}`);
  }
}

export async function CancelOrder(id) {
  let response;
  try {
    response = await api.delete(`orders?id=${id}`);
    Alert.alert('Cancelada', 'Ordem de serviço cancelada');
    return true;
  } catch (error) {
    Alert.alert('Falha no Aceite', `${response.error}`);
  }
}
