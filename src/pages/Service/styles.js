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
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #fff;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;
export const ScrollView = styled.ScrollView`
  align-self: stretch;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
export const InputDefect = styled(Input)`
  margin-bottom: 10px;
  height: 200px;
`;

export const DropType = styled.Picker`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 10px;

  font-size: 15px;

  color: #fff;
`;
export const SubmitButton = styled(Button)`
  margin-top: 5px;
  width: 267px;
  align-self: center;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
  align-self: center;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
