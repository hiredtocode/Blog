/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Paper } from '@material-ui/core';
import Layout from './src/components/layout';
import Theme from './src/components/theme';

// PageElement re-renders every time page changes
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Paper>{element}</Paper>
    </ThemeProvider>
  );
}
