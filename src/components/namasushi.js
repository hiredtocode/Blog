import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NamaSushiImage from '../../static/images/cards/namasushi.jpg';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: `auto`,
  },
}));

export default function NamaSushi() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <a href="https://namasushi.ca" target="_" rel="noopener">
        {' '}
        <CardHeader title="Nama Sushi" subheader="March 14, 2016" />
      </a>
      <CardMedia component="img" className={classes.media} src={NamaSushiImage} title="Nama Sushi" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This website was built using Wordpress for one of my client in 2016.
        </Typography>
      </CardContent>
    </Card>
  );
}
