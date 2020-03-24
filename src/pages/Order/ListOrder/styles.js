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

export const AreaDate = styled.View`
  flex: 2;
  flex-direction: column;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const Description = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const AreaIcon = styled.TouchableOpacity`
  padding: 10px;
`;
