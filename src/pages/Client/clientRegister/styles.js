import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  margin-top: 50px;
`;
export const ScrollView = styled.ScrollView`
  align-self: stretch;
`;

export const Title = styled.Text`
  margin-top: 20px;
  color: #fff;
  font-size: 22px;
`;
export const Form = styled.View`
  align-self: stretch;
  margin-top: 35px;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SwitchArea = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const TextSwitch = styled.Text`
  margin-top: 5px;
  color: #fff;
  font-size: 18px;
`;
export const Switch = styled.Switch`
  margin-left: 10px;
`;
export const SubmitButton = styled(Button)`
  margin-top: 5px;
  width: 267px;
  align-self: center;
`;
