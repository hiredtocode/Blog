import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const sidebarWidth = 200;
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: `flex`,
    flexDirection: `row`,
  },
  leftNav: {
    minWidth: sidebarWidth,
  },
  rightNav: {
    minWidth: sidebarWidth,
  },
  content: {
    paddingTop: `64px`,
    height: `auto`,
    minHeight: `calc(100vh - 95px)`,
    // [theme.breakpoints.up('xs')]: {},
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
      <aside className={classes.leftNav} />
      <Container component="main" className={classes.content}>
        {children}
      </Container>
      <aside className={classes.rightNav} />
    </div>
  );
}
