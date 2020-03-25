import React, { useEffect, useState } from 'react';
import { FlatList, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import api from '~/services/api';
import {
  AceptOrder,
  CancelOrder,
} from '~/pages/Order/ListOrder/handleListOrder';

import {
  Container,
  AreaInfo,
  AreaDate,
  Name,
  AreaIcon,
  Description,
} from './styles';

export default function ListOrder({ navigation }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function listOrders() {
      const listOrdersOpen = await api.get(`orderopen`);
      setOrders(listOrdersOpen.data);
    }
    listOrders();
  }, []);

  function handleAcept(item) {
    const aceppt_at = '2020-03-24T16:30';
    AceptOrder(item.id, item.technical.id, aceppt_at, item.service.id);
  }
  function handleCancel(item) {
    CancelOrder(item.id, item.service.id);
  }

  return (
    <Background>
      <Container>
        <FlatList
          data={orders}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <AreaInfo
              onPress={() => navigation.push('CloseOrder', { order: item })}
            >
              <AreaDate>
                <Name>{item.service.client.name}</Name>
                <Name>Sistema: {item.service.type}</Name>
                <Description> {item.description_defect}</Description>
                <Name> Técnico: {item.technical.name}</Name>
                <Name>
                  Status: {item.service.status === 'create' ? 'Avisado' : null}
                </Name>
              </AreaDate>
              {item.service.status === 'create' ? (
                <AreaIcon onPress={() => handleAcept(item)}>
                  <Icon name="done" size={40} color="rgba(0,150,0,0.8)" />
                </AreaIcon>
              ) : null}
              <AreaIcon onPress={() => handleCancel(item)}>
                <Icon name="cancel" size={40} color="rgba(255,0,0,0.8)" />
              </AreaIcon>
            </AreaInfo>
          )}
        />
      </Container>
    </Background>
  );
}
