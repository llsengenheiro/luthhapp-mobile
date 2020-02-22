import React, { useRef, useState } from 'react';

import { Image } from 'react-native';
import logoNomeMenor from '~/assets/logoNomeMenor.png';
import Background from '~/components/Background';
import { ClientUp } from './handleClient';

import {
  Container,
  ScrollView,
  Title,
  Form,
  FormInput,
  SubmitButton,
  SwitchArea,
  TextSwitch,
  Switch,
} from './styles';

export default function clientRegister() {
  const addressRef = useRef();
  const phoneRef = useRef();

  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [contract, setContract] = useState(false);

  function handleSubmit() {
    ClientUp(name, phone, address, contract);
  }

  return (
    <Background>
      <ScrollView>
        <Container>
          <Image source={logoNomeMenor} />
          <Title>CADASTRO CLIENTE</Title>
          <Form>
            <FormInput
              icon="business"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome completo"
              returnKeyType="next"
              onSubmitEditing={() => addressRef.current.focus()}
              value={name}
              onChangeText={setName}
            />
            <FormInput
              icon="add-location"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite o endereço"
              ref={addressRef}
              returnKeyType="next"
              onSubmitEditing={() => phoneRef.current.focus()}
              value={address}
              onChangeText={setAddress}
            />
            <FormInput
              icon="local-phone"
              placeholder="Telefone comercial"
              ref={phoneRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={phone}
              onChangeText={setPhone}
            />
            <SwitchArea>
              <TextSwitch>Contrato com a Luth ?</TextSwitch>
              <Switch onValueChange={setContract} value={contract} />
            </SwitchArea>
          </Form>
          <SubmitButton onPress={handleSubmit}>Cadastrar</SubmitButton>
        </Container>
      </ScrollView>
    </Background>
  );
}
