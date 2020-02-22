import styled from 'styled-components/native';
import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
`;

export const AreaInfo = styled.TouchableOpacity`
  background: #fff;

  margin: 5px 15px;
  border: 2px;
  border-radius: 5px;
  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TInput = styled(Input)`
  margin: 10px;
`;
export const AreaDate = styled.View``;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const Address = styled.Text`
  margin-left: 10px;
  margin-top: 5px;
`;

export const Cellphone = styled.Text`
  margin-left: 10px;
`;

export const Contract = styled.Text`
  margin-top: 5px;
`;
export const AreaIcon = styled.TouchableOpacity`
  padding: 10px;
`;
