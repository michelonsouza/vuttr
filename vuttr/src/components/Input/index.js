import React from 'react';
import PropTypes from 'prop-types';

import { Container, TextInput } from './styles';

export default function Input({ hasErrors, ...rest }) {
  return (
    <Container>
      <TextInput hasErrors={hasErrors} {...rest} />
      {hasErrors && <span className="error">{hasErrors}</span>}
    </Container>
  );
}

Input.defaultProps = {
  hasErrors: '',
};

Input.propTypes = {
  hasErrors: PropTypes.string,
};
