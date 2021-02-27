import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

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
    backgroundColor: 'grey',
    padding: style.spacing(3),
  },
}));

export default function Content({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>test{children}</main>
    </div>
  );
}
