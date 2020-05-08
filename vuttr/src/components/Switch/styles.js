import styled, { css } from 'styled-components';

export const Container = styled.button`
  height: 36px;
  width: 65px;
  border-radius: 18px;
  padding: 0 3px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.colorContrasted};

  ${(props) =>
    props.active &&
    css`
      background: ${props.theme.colors[props.variant]};
    `}

  span {
    content: '';
    background: #fff;
    display: block;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    transition: margin-left 200ms ease !important;
    margin-left: ${(props) => (props.active ? 'calc(100% - 30px)' : 0)};
  }
`;
