import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Nav from './nav';
// import Testnav from './testnav';
// import Content from './content';
import CustomTheme from '../material-ui-top-layout/theme';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
      <Nav />
      {/* <Testnav /> */}
      {/* <Content /> */}
      {children}
      <Footer />
    </ThemeProvider>
  );
}
