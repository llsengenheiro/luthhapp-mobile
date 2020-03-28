import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';
import OneSignal from 'react-native-onesignal';
import logoNome from '~/assets/logoNome.png';
import Background from '~/components/Background';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  ScrollView,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Profile({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function receivedPush(notification) {
    console.tron.log(`Recebido ${JSON.stringify(notification)}`);
  }
  function openedPush(openResult) {
    console.tron.log(`Aberto ${JSON.stringify(openResult)}`);
  }
  function idsPush(push) {
    console.tron.log(`IDS${JSON.stringify(push)}`);
  }

  useEffect(() => {
    OneSignal.init('f5b5d57c-f68c-4802-9e35-b04559addd16', {
      kOSSettingsKeyAutoPrompt: true,
    });

    OneSignal.addEventListener('received', receivedPush);
    OneSignal.addEventListener('opened', openedPush);
    OneSignal.addEventListener('ids', idsPush);
  }, []);

  function handleSubmit() {}

  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <Background>
      <Container>
        <Image source={logoNome} />
        <ScrollView>
          <Form>
            <FormInput
              icon="person-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome completo"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              value={name}
              onChangeText={setName}
            />
            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu melhor e-mail"
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />
            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Sua senha secreta"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />
          </Form>
          <SubmitButton onPress={handleSubmit}>Entrar</SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
        </ScrollView>
      </Container>
    </Background>
  );
}
