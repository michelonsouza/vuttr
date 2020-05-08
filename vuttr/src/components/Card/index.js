import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
