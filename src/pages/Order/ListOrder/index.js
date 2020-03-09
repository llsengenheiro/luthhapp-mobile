import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import api from '~/services/api';

import { Container, AreaInfo, AreaDate, Name, AreaIcon } from './styles';

export default function ListOrder({ navigation }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function handleClients() {
      const listServices = await api.get(`orderopen`);
      setOrders(listServices.data);
    }
    handleClients();
  }, []);

  return (
    <Background>
      <Container>
        <FlatList
          data={orders}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <AreaInfo onPress={() => {}}>
              <AreaDate>
                <Name>{item.service.client.name}</Name>
                <Name>{item.service.type}</Name>
                <Name>{item.description_defect}</Name>
                <Name>{item.technical.name}</Name>
                <Name>{item.service.status}</Name>
              </AreaDate>
              <AreaIcon>
                <Icon
                  name="delete-forever"
                  size={40}
                  color="rgba(255,0,0,0.8)"
                />
              </AreaIcon>
            </AreaInfo>
          )}
        />
      </Container>
    </Background>
  );
}
