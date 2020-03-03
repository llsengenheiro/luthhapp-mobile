import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Background from '~/components/Background';
import api from '~/services/api';

import { Container, AreaInfo, AreaDate, Name, Address } from './styles';

export default function ListService({ route, navigation }) {
  const [techs, setTechs] = useState([]);
  const { service } = route.params;

  useEffect(() => {
    async function handleClients() {
      const listTech = await api.get(`technical`);
      setTechs(listTech.data);
    }
    handleClients();
  }, []);

  return (
    <Background>
      <Container>
        <FlatList
          data={techs}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <AreaInfo
              onPress={() => navigation.push('Order', { tech: item, service })}
            >
              <AreaDate>
                <Name>{item.name}</Name>
                <Address>{item.email}</Address>
              </AreaDate>
            </AreaInfo>
          )}
        />
      </Container>
    </Background>
  );
}
