import React, { useState } from 'react';

import Background from '~/components/Background';
import { CreateOrder } from './handleOrder';

import {
  Container,
  Title,
  ScrollView,
  Form,
  FormInput,
  InputDefect,
  SubmitButton,
} from './styles';

export default function Order({ route, navigation }) {
  const [description_defect, setDescriptiom_defect] = useState();

  const { tech, service } = route.params;

  function handleSubmit() {
    CreateOrder(service.id, tech.id, description_defect);
    navigation.popToTop();
  }

  return (
    <Background>
      <Container>
        <Title>ORDEM DE SERVIÇO</Title>
        <ScrollView>
          <Form>
            <FormInput
              icon="business"
              autoCorrect={false}
              autoCapitalize="none"
              editable={false}
              value={service.client.name}
            />
            <FormInput
              icon="business"
              autoCorrect={false}
              autoCapitalize="none"
              editable={false}
              returnKeyType="next"
              onSubmitEditing={() => defectRef.current.focus()}
              value={service.user.name}
            />
            <FormInput icon="business" editable={false} value={tech.name} />
            <FormInput icon="business" editable={false} value={tech.email} />
            <FormInput icon="business" editable={false} value={service.type} />
            <InputDefect
              multiline
              editable={false}
              value={`DEFEITO RELATADO:\n\n${service.defect}`}
            />
            <InputDefect
              multiline
              autoCapitalize="none"
              autoCompleteType="off"
              placeholder="Detalhes e orientações da ocorrência..."
              value={description_defect}
              onChangeText={setDescriptiom_defect}
            />
          </Form>
          <SubmitButton onPress={handleSubmit}>Gerar</SubmitButton>
        </ScrollView>
      </Container>
    </Background>
  );
}
