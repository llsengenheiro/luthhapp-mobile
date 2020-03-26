import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

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
  const [refresh, setRefresh] = useState(true);
  const isFocused = useIsFocused();

  async function listOrders() {
    const listOrdersOpen = await api.get(`orderopen`);
    setOrders(listOrdersOpen.data);
  }
  useEffect(() => {
    if (refresh || isFocused) {
      listOrders();
      setRefresh(false);
    }
  }, [isFocused, refresh]);

  async function handleAcept(id) {
    await AceptOrder(id);
    setRefresh(true);
  }
  async function handleCancel(id) {
    const cancelOrder = await CancelOrder(id);
    if (cancelOrder) {
      setRefresh(true);
    }
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
                <AreaIcon onPress={() => handleAcept(item.id)}>
                  <Icon name="done" size={40} color="rgba(0,150,0,0.8)" />
                </AreaIcon>
              ) : null}
              <AreaIcon onPress={() => handleCancel(item.id)}>
                <Icon name="cancel" size={40} color="rgba(255,0,0,0.8)" />
              </AreaIcon>
            </AreaInfo>
          )}
        />
      </Container>
    </Background>
  );
}
