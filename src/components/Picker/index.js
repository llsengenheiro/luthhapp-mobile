import React from 'react';
import PropTypes from 'prop-types';

import { Container, DropPicker } from './styles';

export default function Picker({ style, placeholder, ...rest }) {
  return (
    <Container style={style}>
      <DropPicker />
      <DropPicker.Item value="" label={placeholder} />
    </Container>
  );
}

Picker.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  placeholder: PropTypes.string.isRequired,
};
Picker.defaultProps = {
  style: {},
};
