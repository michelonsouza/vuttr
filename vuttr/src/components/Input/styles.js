import styled, { css } from 'styled-components';

import metrics from '~/styles/metrics';

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  position: relative;
  border-radius: ${metrics.borderRadius}px;
  padding: 0 ${metrics.padding}px;
  background: ${(props) => props.theme.colors.colorContrast};
  border: 1px solid ${(props) => props.theme.colors.colorContrasted};
  color: ${(props) => props.theme.colors.ink};
  display: flex;
  align-items: center;
  margin-right: 10px;

  img {
    height: 20px;
    margin-right: ${metrics.margin / 2}px;
  }

  &:focus-within {
    background: ${(props) => props.theme.colors.colorContrasted};
    border-color: ${(props) => props.theme.colors.colorMostContrasted};
  }

  svg {
    margin-right: ${metrics.margin}px;
    color: ${(props) => props.theme.colors.ink};
  }

  span.error {
    color: ${(props) => props.theme.colors.danger} !important;
    font-size: 18px;
    text-align: right;
  }
`;

export const TextInput = styled.input`
  height: ${metrics.height}px;
  background: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.ink};
  display: flex;
  align-items: center;
  flex: 1;

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
