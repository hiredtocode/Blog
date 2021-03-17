import React from 'react';
import { makeStyles, CardActionArea, CardActions } from '@material-ui/core';
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
    opacity: `0.7`,
    '&:hover': {
      opacity: `1`,
      transition: ['800ms'],
    },
  },
}));

export default function NamaSushi() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <a href="https://namasushi.ca" target="_" rel="noopener">
        {' '}
        <CardActionArea>
          <CardHeader gutterBottom variant="h5" component="h2" title="Nama Sushi" subheader="September 14, 2016" />
          <CardMedia component="img" className={classes.media} src={NamaSushiImage} title="Nama Sushi" />
          <CardContent>
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
