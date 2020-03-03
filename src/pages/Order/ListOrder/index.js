import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import api from '~/services/api';

import {
  Container,
  AreaInfo,
  AreaDate,
  Name,
  Address,
  Cellphone,
  AreaIcon,
} from './styles';

export default function ListOrder({ navigation }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function handleClients() {
      const listServices = await api.get(`orders`);
      setServices(listServices.data);
    }
    handleClients();
  }, []);

  return (
    <Background>
      <Container>
        <FlatList
          data={services}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <AreaInfo
              onPress={() => navigation.push('ListTech', { service: item })}
            >
              <AreaDate>
                <Name>{item.client.name}</Name>
                <Name>{item.type}</Name>
                <Name>{item.defect}</Name>

                <Address>{item.client.address}</Address>
                <Cellphone>{item.client.cellphone}</Cellphone>
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
