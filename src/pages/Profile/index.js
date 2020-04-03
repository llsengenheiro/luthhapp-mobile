import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Alert } from 'react-native';
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
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    Alert.alert('Usuário', `${user.id}`);
  }, [user]);

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
          <SubmitButton onPress={handleSubmit}>Atualizar</SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
        </ScrollView>
      </Container>
    </Background>
  );
}
