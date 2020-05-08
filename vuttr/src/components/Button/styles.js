import styled from 'styled-components';

import metrics from '~/styles/metrics';

export const Container = styled.button`
  height: ${metrics.height}px;
  border-radius: ${metrics.borderRadius}px;
  padding: 0 ${metrics.padding}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  color: #fff;
  background: ${(props) => props.theme.colors[props.variant]};
  min-width: ${metrics.width}px;
  font-weight: 600;

  &:hover {
    background: ${(props) => props.theme.colors[`${props.variant}Dark`]};
  }

  &:active {
    background: ${(props) => props.theme.colors[`${props.variant}Darker`]};
  }

  &[disabled] {
    background: ${(props) => props.theme.colors[props.variant]};
    opacity: 0.4 !important;
    cursor: not-allowed;
  }

  svg {
    margin-right: 5px;
  }

  img.logo {
    margin-left: 5px;
    width: 30px !important;
    height: 30px !important;
  }
`;
