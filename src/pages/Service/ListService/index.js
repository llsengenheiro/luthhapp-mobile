import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

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

export default function ListService({ navigation }) {
  const [services, setServices] = useState([]);
  const isFocused = useIsFocused();

  async function loadServiesPeding() {
    const listServices = await api.get(`services/peding`);
    setServices(listServices.data);
  }
  useEffect(() => {
    if (isFocused) {
      loadServiesPeding();
    }
  }, [isFocused]);

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
