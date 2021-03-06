import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';

const sidebarWidth = 250;
const useStyles = makeStyles((theme) => ({
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
    padding: theme.spacing(3),
    paddingLeft: `${sidebarWidth}px`,
    paddingTop: `65px`,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: `10px`,
      paddingRight: `10px`,
    },
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
