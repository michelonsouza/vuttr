import styled from 'styled-components';

import metrics from '~/styles/metrics'

export const Container = styled.div`
  border: 1px solid ${({theme}) => theme.colors.colorContrasted};
  color: ${({theme}) => theme.colors.lightInk};
  background: ${({theme}) => theme.colors.colorContrast};
  padding: ${metrics.padding / 8}px ${metrics.padding / 2}px;
  border-radius: ${metrics.borderRadius}px;
  margin-bottom: ${metrics.margin}px;
  font-size: 16px
`;
