import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSucess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  console.tron.log(email, password);
  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  yield put(signInSucess(token, user));
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
