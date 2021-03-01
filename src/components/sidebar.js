/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import SidebarClosed from './sidebarClosed';
import SidebarOpen from './sidebarOpen';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export default function Sidebar({ children }) {
  const classes = useStyles();
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    // <ThemeProvider theme={custom}>
    <div className={classes.root}>
      <CssBaseline />
      {isSmall ? (
        <>
          <SidebarClosed />
        </>
      ) : isLarge ? (
        <>
          <SidebarOpen />
        </>
      ) : (
        <>
          <SidebarClosed />{' '}
        </>
      )}
      {children}
    </div>
    // </ThemeProvider>
  );
}
