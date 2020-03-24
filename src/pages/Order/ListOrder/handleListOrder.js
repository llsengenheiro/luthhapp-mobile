import { Alert } from 'react-native';
import api from '~/services/api';

export async function AceptOrder(id, technical_id, aceppt_at, service_id) {
  try {
    console.tron.log(id, technical_id, aceppt_at, service_id);
    const response = await api.put('order/technical/accept', {
      id,
      technical_id,
      aceppt_at,
      service_id,
    });
    Alert.alert('Sucsso', 'Ordem de serviço aceita');
    console.tron.log(response);
  } catch (error) {
    Alert.alert('Falha no Aceite', 'Verifique.');
  }
}

export async function CancelOrder(id, service_id) {
  try {
    console.tron.log(id, service_id);
    const response = await api.put('order/technical/cancel', {
      id,
      aceppt_at: null,
      service_id,
    });
    Alert.alert('Cancelada', 'Ordem de serviço cancelada');
    console.tron.log(response);
  } catch (error) {
    Alert.alert('Falha no Aceite', 'Verifique.');
  }
}
