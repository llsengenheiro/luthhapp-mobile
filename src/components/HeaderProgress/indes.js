import React from 'react';

import { Container } from './styles';

export default function HeaderProgress() {
  return (
    <Container>
      <Left>
        <Back />
      </Left>
      <Center>
        <Porgess />
      </Center>
    </Container>
  );
}
