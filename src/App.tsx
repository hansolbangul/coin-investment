import { ThemeProvider } from '@emotion/react';
import React, { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from './atoms';
import { GlobalStyle } from './global';
import { Router } from './router/Router';
import { darkTheme, lightTheme } from './theme';

function App() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ReactQueryDevtools initialIsOpen={true} />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App;
