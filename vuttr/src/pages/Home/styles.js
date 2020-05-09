import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

import metrics from '~/styles/metrics';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: 20px;

  .home__button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-title {
    display: flex;
    margin-bottom: ${metrics.margin}px;
  }

  .form-add-tool {
    margin-top: ${metrics.margin / 2}px;

    button {
      margin-left: auto;
    }

    label {
      font-weight: 600;
      color: ${(props) => props.theme.colors.ink};

      input,
      textarea {
        margin: ${metrics.margin / 4}px 0 ${metrics.margin}px;
      }

      &:last-child {
        input,
        textarea {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 900px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  @media screen and (max-width: 900px) {
    padding: 0 ${metrics.padding / 3}px;
  }

  h1 {
    color: ${(props) => props.theme.colors.ink};
  }

  h4 {
    margin: ${metrics.margin / 2}px 0 ${metrics.margin}px 0;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  & > div {
    display: flex;
    flex: 1;

    & > div {
      flex: 1;
    }

    @media screen and (min-width: 768px) {
      margin-right: 20px;
    }
  }

  form {
    flex: 1;
    max-width: 50%;

    @media screen and (min-width: 765px) {
      max-width: 100%;
    }

    & > div {
      flex: 1;
    }
  }

  @media screen and (max-width: 565px) {
    flex-direction: column;
    align-items: flex-start;

    button:last-child {
      width: 100%;
      margin-top: ${metrics.margin}px;

      @media screen and (min-width: 768px) {
        margin-left: 20px;
      }
    }
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 565px) {
    align-items: center;

    span {
      font-size: 16px;
    }
  }

  input {
    margin-right: ${metrics.margin}px;
  }

  button {
    margin-right: ${metrics.margin / 2}px;
  }

  span {
    color: ${(props) => props.theme.colors.ink};
  }
`;

export const Scrollbar = styled(PerfectScrollbar)`
  margin-top: ${metrics.margin}px;
  max-height: calc(100vh - 300px);
  margin-bottom: 30px;
`;

export const HeaderToolItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  a,
  a:visited {
    /* text-decoration: underline; */
    color: ${(props) => props.theme.colors.ink};

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    color: ${(props) => props.theme.colors.lightInk};

    svg {
      margin-right: ${metrics.margin / 6}px;
    }

    img.logo {
      margin-right: ${metrics.margin / 2}px;
      width: 15px;
      height: 15px;
    }
  }
`;

export const ToolContent = styled.div`
  p {
    margin-top: ${metrics.margin / 2}px;
    color: ${(props) => props.theme.colors.ink};
  }

  div {
    margin-top: ${metrics.margin / 2}px;

    b {
      color: ${(props) => props.theme.colors.ink};
    }
  }
`;

export const NoTools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${metrics.padding * 2}px 0;

  h2 {
    color: ${(props) => props.theme.colors.lightInk};
    text-align: center;
  }
`;
