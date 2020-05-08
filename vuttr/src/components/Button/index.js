import React, { useContext } from 'react';
import Spinner from 'react-spinner-material';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ loading, variant, children, ...rest }) {
  const theme = useContext(ThemeContext);

  return (
    <Container variant={variant} {...rest}>
      {loading ? (
        <Spinner color={theme.colors.white} stroke={3} radius={20} />
      ) : (
        children
      )}
    </Container>
  );
}

Button.defaultProps = {
  loading: false,
  variant: 'primary',
};

Button.propTypes = {
  loading: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
