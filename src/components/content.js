import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const sidebarWidth = 240;
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: `flex`,
    flexDirection: `row`,
  },
  content: {
    width: `100%`,
    paddingTop: `64px`,
    height: `auto`,
    minHeight: `calc(100vh - 95px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100vw - 175px)`,
    },
    [theme.breakpoints.up('md')]: {
      width: `calc(100vw - 175px)`,
    },
  },
  asideLeft: {
    display: `block`,
    flexGrow: 0,
    minWidth: sidebarWidth,
    [theme.breakpoints.down('sm')]: {
      display: `none`,
    },
  },
  asideRight: {
    display: `block`,
    flexGrow: 0,
    minWidth: sidebarWidth,
    [theme.breakpoints.down('sm')]: {
      display: `none`,
    },
  },
  container: {
    display: `flex`,
    flexDirection: 'column',
  },
}));

export default function Content({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <nav className={classes.asideLeft} />
      <main className={classes.content}>
        <Container maxWidth="md" className={classes.container}>
          {children}
        </Container>
      </main>
      <nav className={classes.asideRight} />
    </div>
  );
}
