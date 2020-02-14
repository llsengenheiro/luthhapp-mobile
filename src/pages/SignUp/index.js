import React, { useRef } from 'react';
import { Image } from 'react-native';
import logoNome from '~/assets/logoNome.png';
import Background from '~/components/Background';

import {
  Container,
  ScrollView,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}
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
            />
            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Sua senha secreta"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />
          </Form>
          <SubmitButton onPress={handleSubmit}>Entrar</SubmitButton>
          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>Já faço parte desse universo</SignLinkText>
          </SignLink>
        </ScrollView>
      </Container>
    </Background>
  );
}
