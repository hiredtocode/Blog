import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';

const sidebarWidth = 250;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingLeft: `${sidebarWidth}px`,
    paddingTop: `65px`,
    paddingBottom: `10px`,
    paddingRight: `10px`,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: `10px`,
      paddingRight: `10px`,
    },
  },
  container: {
    display: `flex`,
    flexDirection: 'column',
  },
  paper: {
    height: `auto`,
    minHeight: `calc(100vh - 95px)`,
  },
}));

export default function Content({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <main className={classes.content}>
          <Container maxWidth="md" className={classes.container}>
            {children}
          </Container>
        </main>
      </Paper>
    </div>
  );
}
