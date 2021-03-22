import React from 'react';
import { makeStyles, CardActionArea, Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';
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
          <CardHeader variant="h5" component="h2" title="Responsive Web Design Certificate from FCC" />
          <CardMedia component="img" className={classes.media} src={ResponsiveCertif} title="Responsive Web Design" />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This is a Responsive Web Design certificate from Free Code Camp.
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}
