import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import light from './styles/theme/light';
import dark from './styles/theme/dark';
import GlobalStyle from './styles/global';

import { Home } from './pages';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(() => {
    const userDefaultTheme = localStorage.getItem('@vuttr:theme:selected');

    if (userDefaultTheme) {
      return userDefaultTheme;
    }

    return 'light';
  });

  const theme = useMemo(() => {
    return selectedTheme === 'dark' ? dark : light;
  }, [selectedTheme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Home changeTheme={setSelectedTheme} />
    </ThemeProvider>
  );
}

export default App;
