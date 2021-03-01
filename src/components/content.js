import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const sidebarWidth = 240;
const useStyles = makeStyles((style) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: `100vh`,
    marginTop: `10px`,
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: style.spacing(3),
    paddingLeft: `${sidebarWidth}px`,
    // paddingRight: `240px`,
    paddingTop: `60px`,
    // [theme.breakpoints.up('md')]: {
    //  backgroundColor: theme.palette.primary.main,
    // },
    // [theme.breakpoints.up('lg')]: {
    //  backgroundColor: green[500],
    // },
  },
}));

export default function Content({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Container maxWidth="md">{children}</Container>
      </main>
    </div>
  );
}
