import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { signInRequest, signInSucess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    yield put(signInSucess(token, user));
  } catch (error) {
    Alert.alert('Falha no login:', 'Verifique seus dados e tente novamente');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, onesignal_id } = payload;
    console.tron.log(payload);
    yield call(api.post, 'users', {
      name,
      email,
      password,
      onesignal_id,
      townhouse: null,
      perfil: 'admin',
    });

    Alert.alert('Casatro:', 'Cadastro realizado, bem vindo.');
    yield put(signInRequest(email, password));
  } catch (error) {
    Alert.alert('Falha no Cadastro:', 'Verifique os dados e tente novamente');
    yield put(signFailure());
  }
}

export function* signOut() {
  try {
    yield put(signOut());
  } catch (error) {
    Alert.alert('Falha ao Sair:', 'Verifique');
    yield put(signFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
