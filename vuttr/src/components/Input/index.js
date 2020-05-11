import React from 'react';
import PropTypes from 'prop-types';

import { Container, TextInput } from './styles';

export default function Input({ icon: Icon, hasErrors, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <TextInput hasErrors={hasErrors} {...rest} />
      {hasErrors && <span className="error">{hasErrors}</span>}
    </Container>
  );
}

Input.defaultProps = {
  hasErrors: '',
  icon: null,
};

Input.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  hasErrors: PropTypes.string,
};
