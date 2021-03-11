import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Header from './header';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'All rights reserved. © '}
      <Link color="inherit" href="https://material-ui.com/">
        <Header />
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((style) => ({
  footer: {
    padding: style.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      style.palette.type === 'light'
        ? style.palette.grey[200]
        : style.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="xs">
          <Typography variant="body1">Bug report link.</Typography>
          <Copyright />
        </Container>
      </footer>
    </>
  );
}
