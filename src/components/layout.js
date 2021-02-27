import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Content from './content';
import Footer from './footer';
import SideMenu from './sidebar';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          height: `100%`,
        },
        body: {
          minHeight: `100%`,
        },
      },
    },
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideMenu />
      <Content>{children}</Content>
      <Footer />
    </ThemeProvider>
  );
}
