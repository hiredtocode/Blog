import React from 'react';
import { makeStyles, CardActionArea, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ResponsiveCertif from '../../static/images/responsiveweb.jpg';

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

export default function ResponsiveCertification() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <a href="https://www.freecodecamp.org/certification/hiredtocode/responsive-web-design" target="_" rel="noopener">
        {' '}
        <CardActionArea>
          <CardHeader variant="h5" component="h2" title="Responsive Web Design" subheader="December 15, 2020" />
          <CardMedia component="img" className={classes.media} src={ResponsiveCertif} title="Responsive Web Design" />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This is a Responsive Web Design certificate from Free Code Camp.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions />
      </a>
    </Card>
  );
}
