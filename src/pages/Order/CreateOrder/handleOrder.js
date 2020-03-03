import { Alert } from 'react-native';
import api from '~/services/api';

export async function CreateOrder(
  service_id,
  technical_id,
  description_defect
) {
  try {
    const response = await api.post('orders', {
      service_id,
      technical_id,
      description_defect,
      status: 'programada',
    });
    Alert.alert('Sucsso', 'Ordem de serviço gerada.');
    console.tron.log(response);
    return true;
  } catch (error) {
    Alert.alert('Falha na geração', 'Verifique o preenchimento dos dados.');
  }
}
