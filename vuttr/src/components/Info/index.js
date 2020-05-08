import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Info({children}) {
  return (
    <Container>
      <small>
        <em>{children}</em>
      </small>
    </Container>
  );
}

Info.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Info;
