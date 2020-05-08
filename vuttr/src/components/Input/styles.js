import styled, { css } from 'styled-components';

import metrics from '~/styles/metrics';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  span.error {
    color: ${(props) => props.theme.colors.danger} !important;
    font-size: 18px;
    text-align: right;
  }
`;

export const TextInput = styled.input`
  height: ${metrics.height}px;
  border-radius: ${metrics.borderRadius}px;
  padding: 0 ${metrics.padding}px;
  background: ${(props) => props.theme.colors.colorContrast};
  border: 1px solid ${(props) => props.theme.colors.colorContrasted};
  color: ${(props) => props.theme.colors.ink};
  display: flex;
  align-items: center;

  &::placeholder {
    color: ${(props) => props.theme.colors.lighterInk};
  }

  &:focus {
    background: ${(props) => props.theme.colors.colorContrasted};
    border-color: ${(props) => props.theme.colors.colorMostContrasted};
  }

  ${(props) =>
    props.hasErrors &&
    css`
      background: ${props.theme.colors.dangerMostLight} !important;
      border-color: ${props.theme.colors.danger} !important;
      color: ${props.theme.colors.danger} !important;
    `}
`;
