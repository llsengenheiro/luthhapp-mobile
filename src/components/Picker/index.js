import React from 'react';
import PropTypes from 'prop-types';

import { Container, DropPicker } from './styles';

export default function Picker({ style, itens, ...rest }) {
  return (
    <Container style={style}>
      <DropPicker>
        {itens.map((v, k) => {
          console.tron.log(v);
          return <DropPicker.Item key={k} value={k} label={v.name} />;
        })}
      </DropPicker>
    </Container>
  );
}

Picker.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  itens: PropTypes.arrayOf.isRequired,
};
Picker.defaultProps = {
  style: {},
};
