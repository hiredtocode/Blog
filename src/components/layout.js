import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Content from './content';
import Footer from './footer';
import Sidebar from './sidebar';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          height: `100%`,
          scrollBehavior: `smooth`,
          scrollPaddingTop: `80px`,
        },
      },
    },
  },
});

console.log(theme);
export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar />
      <Content>{children}</Content>
      <Footer />
    </ThemeProvider>
  );
}
