import React, { useRef, useState } from 'react';

import Background from '~/components/Background';
import { CreateService } from './handleService';

import {
  Container,
  Title,
  ScrollView,
  Form,
  FormInput,
  InputDefect,
  DropType,
  SubmitButton,
} from './styles';

export default function Service({ route, navigation }) {
  const defectRef = useRef();

  const { id } = route.params;
  const { client } = route.params;

  const [defect, setDefect] = useState();
  const [type, setType] = useState(0);
  const [types, setTypes] = useState([
    { id: 0, name: 'Selecione o tipo de serviço =>', value: '30' },
    { id: 1, name: 'Central de Incêndio', value: '50' },
    { id: 2, name: 'Automação', value: '50' },
    { id: 3, name: 'Comunicação', value: '50' },
    { id: 4, name: 'Motor de POrtão', value: '50' },
    { id: 5, name: 'Segurança Eletrônica', value: '30' },
  ]);

  function handleSubmit() {
    CreateService(id, types[type].name, defect);
    navigation.navigate('Home');
  }

  return (
    <Background>
      <Container>
        <Title>SOLICITAÇÃO DE SERVIÇO</Title>
        <ScrollView>
          <Form>
            <FormInput
              icon="business"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Cliente"
              returnKeyType="next"
              onSubmitEditing={() => defectRef.current.focus()}
              value={client}
            />
            <DropType
              placeholderIconColor="#FFF"
              mode="dialog"
              prompt="Tipo do serviço:"
              selectedValue={type}
              onValueChange={itemValue => setType(itemValue)}
            >
              {types.map(v => {
                return <DropType.Item key={v.id} value={v.id} label={v.name} />;
              })}
            </DropType>
            <InputDefect
              multiline
              autoCapitalize="none"
              autoCompleteType="off"
              placeholder="Descreva a ocorrência..."
              ref={defectRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={defect}
              onChangeText={setDefect}
            />
          </Form>
          <SubmitButton onPress={handleSubmit}>Solicitar</SubmitButton>
        </ScrollView>
      </Container>
    </Background>
  );
}
