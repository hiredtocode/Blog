import React from 'react';
import { makeStyles, CardActionArea, CardActions } from '@material-ui/core';
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
    opacity: `0.7`,
    '&:hover': {
      opacity: `1`,
      transition: ['800ms'],
    },
  },
}));

export default function WebDevMadness() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <a href="https://jasonhan.netlify.app" target="_" rel="noopener">
        {' '}
        <CardActionArea>
          <CardHeader
            gutterBottom
            variant="h5"
            component="h2"
            title="Web Dev Madness"
            subheader="February 23, 2021 ~ present"
          />
          <CardMedia component="img" className={classes.media} src={WebDev} title="Web Dev Madness" />
          <CardContent>
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
