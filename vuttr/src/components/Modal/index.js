import React, { useState } from 'react';
import PropTypes from 'prop-types';

import closeIcon from '~/assets/images/Icon-Close-2px.svg';
import { Container, Content, Overlay } from './styles';

const Modal = React.forwardRef(({ onClose, children }, ref) => {
  const [open, setOpen] = useState(true);
  const [display, setDisplay] = useState(true);

  function close() {
    setOpen(false);

    setTimeout(() => {
      setDisplay(false);
      onClose();
    }, 600);
  }

  return (
    <Container className={!open && 'leave'} display={String(display)}>
      <Overlay className={!open && 'leave'} onClick={close} />
      <Content className={!open && 'leave'}>
        <button type="button" title="Close Modal" onClick={close} ref={ref}>
          <img src={closeIcon} alt="Close" />
        </button>
        <div>{children}</div>
      </Content>
    </Container>
  );
});

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Modal;
