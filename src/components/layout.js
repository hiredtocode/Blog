import React from 'react';
import { CssBaseline, Paper } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import Content from './content';
import Content from './content';
import Footer from './footer';
import Sidebar from './sidebar';

export default function Layout({ children }) {
  const theme = createMuiTheme({});
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <CssBaseline />
        <Sidebar />
        <Content>{children}</Content>
        <Footer />
      </Paper>
    </ThemeProvider>
  );
}
