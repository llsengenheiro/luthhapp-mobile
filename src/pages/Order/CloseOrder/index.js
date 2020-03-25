import React, { useState } from 'react';

import Background from '~/components/Background';
import { OrderDone } from './handleCloseOrder';

import {
  Container,
  Title,
  AreaInfoOrder,
  TextI,
  InfoText,
  ScrollView,
  Form,
  InputMultiline,
  SubmitButton,
} from './styles';

export default function CloseOrder({ route, navigation }) {
  const [serviceDone, setServiceDone] = useState();
  const [backlog, setBacklog] = useState();

  const { order } = route.params;

  function handleSubmit() {
    OrderDone(order.id, serviceDone, setBacklog);
    navigation.popToTop();
  }

  return (
    <Background>
      <Container>
        <Title>ORDEM DE SERVIÇO</Title>
        <ScrollView>
          <AreaInfoOrder>
            <TextI>
              TÉCNICO:
              <InfoText> Rafael</InfoText>
            </TextI>
            <TextI>
              CLIENTE:
              <InfoText> Portal dos Ventos</InfoText>
            </TextI>
            <TextI>
              SISTEMA:
              <InfoText> Motor do Portão</InfoText>
            </TextI>
            <TextI>
              DEFEITO INFORMADO:
              <InfoText>
                Defeito dito pelo clientewebdwedyywedbuyewbduywbeuydbewybdueyd
              </InfoText>
            </TextI>
            <TextI>
              DESCRIÇÃO:
              <InfoText>
                Descriçãodeugduagduygeaugduageudguaeygduygaeudgueagugyudgeyudggad
              </InfoText>
            </TextI>
          </AreaInfoOrder>
          <Form>
            <InputMultiline
              multiline
              autoCapitalize="none"
              autoCompleteType="off"
              placeholder="Como foi a correção do problema..."
              value={serviceDone}
              onChangeText={setServiceDone}
            />
            <InputMultiline
              multiline
              autoCapitalize="none"
              autoCompleteType="off"
              placeholder="Descreva pendências caso tenha..."
              value={backlog}
              onChangeText={setBacklog}
            />
          </Form>
          <SubmitButton onPress={handleSubmit}>Finalizar</SubmitButton>
        </ScrollView>
      </Container>
    </Background>
  );
}
