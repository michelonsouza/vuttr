/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Switch({
  active,
  value,
  checkedValue,
  unCheckedValue,
  onChangeValue,
  variant,
  ...rest
}) {
  function handleChange() {
    const newValue = value === checkedValue ? unCheckedValue : checkedValue;
    onChangeValue(newValue);
  }

  return (
    <Container
      active={active}
      variant={variant}
      {...rest}
      onClick={handleChange}
    >
      <span />
    </Container>
  );
}

Switch.defaultProps = {
  active: false,
  checkedValue: true,
  unCheckedValue: false,
  variant: 'primary',
};

Switch.propTypes = {
  checkedValue: PropTypes.any,
  value: PropTypes.any.isRequired,
  unCheckedValue: PropTypes.any,
  onChangeValue: PropTypes.func.isRequired,
  active: PropTypes.bool,
  variant: PropTypes.string,
};
