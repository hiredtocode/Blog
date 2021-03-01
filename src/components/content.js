import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';

const sidebarWidth = 250;
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
    paddingTop: `65px`,
    // [theme.breakpoints.up('md')]: {
    //  backgroundColor: theme.palette.primary.main,
    // },
    // [theme.breakpoints.up('lg')]: {
    //  backgroundColor: green[500],
    // },
  },

  paper: {
    height: `100vh`,
  },
}));

export default function Content({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Paper className={classes.paper}>
          <Container maxWidth="md">{children}</Container>
        </Paper>
      </main>
    </div>
  );
}
