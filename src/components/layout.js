import React from 'react';
import { CssBaseline } from '@material-ui/core';
import {ThemeProvider,createMuiTheme} from '@material-ui/core/styles';
import {MDXProvider} from '@mdx-js/react'
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
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiLink: {
      underline: `none`,
    },
    MuiContainer: {},
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar />
        <MDXProvider>
          <Content>{children}</Content>
        </MDXProvider>
      <Footer />
    </ThemeProvider>
  );
}
