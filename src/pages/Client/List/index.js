import React, { useEffect, useState } from 'react';
import { Button, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import api from '~/services/api';

import {
  Container,
  TInput,
  AreaInfo,
  AreaDate,
  Name,
  Address,
  Cellphone,
  Contract,
  AreaIcon,
} from './styles';

export default function List({ navigation }) {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function handleClients() {
      const listClient = await api.get(`clients?client=${search}`);
      setClients(listClient.data);
    }
    handleClients();
  }, [search]);

  return (
    <Background>
      <Container>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <TInput
          icon="search"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Buscar um cliente..."
          value={search}
          onChangeText={setSearch}
        />
        <FlatList
          data={clients}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <AreaInfo
              onPress={() =>
                navigation.push('CreateService', {
                  id: item.id,
                  client: item.name,
                })
              }
            >
              <AreaDate>
                <Name>{item.name}</Name>
                <Address>{item.address}</Address>
                <Cellphone>{item.cellphone}</Cellphone>
                <Contract>
                  Possui contrato: {item.contract ? 'Sim' : 'Não'}
                </Contract>
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
