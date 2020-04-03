import React from 'react';
import Background from '~/components/Background';

import {
  Container,
  MenuButton,
  Column,
  TextButton,
  Title,
  AreaButtons,
} from './styles';

export default function Manage({ navigation }) {
  return (
    <Background>
      <Container>
        <Title>GERENCIAMENTO</Title>
        <AreaButtons>
          <Column>
            <MenuButton onPress={() => navigation.push('serviceRoutes')}>
              <TextButton>Solicitar Serviço</TextButton>
            </MenuButton>
            <MenuButton>
              <TextButton>Criar Usuário</TextButton>
            </MenuButton>
          </Column>
          <Column>
            <MenuButton onPress={() => navigation.push('clientRegister')}>
              <TextButton>Cadastrar Cliente</TextButton>
            </MenuButton>
            <MenuButton onPress={() => navigation.push('ListOrder')}>
              <TextButton>ListOrder</TextButton>
            </MenuButton>
          </Column>
        </AreaButtons>
      </Container>
    </Background>
  );
}
