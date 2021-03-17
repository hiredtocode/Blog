import React from 'react';
import { makeStyles, CardActionArea, CardActions, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WebDev from '../../static/images/cards/webdevmadness.jpg';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: `auto`,
  },
}));

export default function WebDevMadness() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <a href="https://jasonhan.netlify.app" target="_" rel="noopener">
        {' '}
        <CardActionArea>
          <CardMedia component="img" className={classes.media} src={WebDev} title="Web Dev Madness" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" subheader="February 23, 2021 ~ present">
              Web Dev Madness
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This website is my latest project which is built by using Gatsby and deployed to Netlify. Instead of using
              a pre-made template, I decided to make it from scratch with help of Material UI. I will be using this
              website as a blog as well as a portfolio.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions />
      </a>
    </Card>
  );
}
