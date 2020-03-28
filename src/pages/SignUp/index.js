import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';
import OneSignal from 'react-native-onesignal';
import logoNome from '~/assets/logoNome.png';
import Background from '~/components/Background';
import { signUpRequest } from '~/store/modules/auth/actions';
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
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [townhouse, setTownhouse] = useState();
  const [onesignalId, setOnesignalId] = useState();

  useEffect(() => {
    OneSignal.init('f5b5d57c-f68c-4802-9e35-b04559addd16', {
      kOSSettingsKeyAutoPrompt: true,
    });

    OneSignal.getPermissionSubscriptionState(status => {
      const userID = status.userId;
      setOnesignalId(userID);
    });
  }, []);
  function handleSubmit() {
    dispatch(signUpRequest(name, email, password, townhouse, onesignalId));
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
              icon="person-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              value={onesignalId}
              onChangeText={setOnesignalId}
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
          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>Já faço parte desse universo</SignLinkText>
          </SignLink>
        </ScrollView>
      </Container>
    </Background>
  );
}
