import React from 'react';
import { makeStyles, CardActionArea, CardActions, Button } from '@material-ui/core';
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
        <CardActionArea>
          <CardMedia component="img" className={classes.media} src={NamaSushiImage} title="Nama Sushi" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Nama Sushi
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This website was built using Wordpress for one of my client in 2016. <br /> <br />
              I've made a few websites like these in the past but they all went out of business and the websites don't
              exist anymore...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions />
      </a>
    </Card>
  );
}
