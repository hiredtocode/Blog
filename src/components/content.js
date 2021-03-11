import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// const sidebarWidth = 250;
const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: `65px`,
    height: `auto`,
    minHeight: `calc(100vh - 95px)`,
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
    <main className={classes.content}>
      <Container maxWidth="md" className={classes.container}>
        {children}
      </Container>
    </main>
  );
}
