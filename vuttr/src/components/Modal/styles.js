import styled, { keyframes } from 'styled-components';

import metrics from '~/styles/metrics';

const enter = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const leave = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(100px);
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: absolute;
  display: ${(props) => (props.display === 'false' ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  opacity: 0;
  animation: ${enter} 300ms forwards ease;
  z-index: 100;

  &.leave {
    animation-delay: 300ms;
    animation: ${leave} 300ms forwards ease;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const Content = styled.div`
  border-radius: ${metrics.borderRadius}px;
  background: ${(props) => props.theme.colors.background};
  width: 600px;
  max-width: 100%;
  margin: auto;
  position: absolute;
  z-index: 1001;
  padding: ${metrics.padding * 1.5}px ${metrics.padding}px;
  transform: translateY(100px);
  opacity: 0;
  animation: ${slideUp} 300ms forwards ease;
  animation-delay: 300ms;

  img.add-title-icon {
    width: 20px;
    display: inline-block;
  }

  &.leave {
    animation: ${slideDown} 300ms forwards ease;
  }

  > button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;
