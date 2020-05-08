import styled from 'styled-components';

import metrics from '~/styles/metrics';

export const Container = styled.div`
  padding: ${metrics.padding}px;
  border-radius: ${metrics.borderRadius}px;
  border: 1px solid ${(props) => props.theme.colors.colorContrasted};
  box-shadow: 0px 10px 10px ${(props) => props.theme.colors.boxShadow};
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: ${metrics.margin}px;
  }
`;
