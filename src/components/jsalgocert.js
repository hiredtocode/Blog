import React from 'react';
import { makeStyles, CardActionArea, CardMedia, CardContent, CardHeader, Card, Typography } from '@material-ui/core';
import JavascriptAlgo from '../../static/images/jsalgoandds.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
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

export default function JavascriptAlgorithms() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <a
        href="https://www.freecodecamp.org/certification/hiredtocode/javascript-algorithms-and-data-structures"
        target="_"
        rel="noopener"
      >
        {' '}
        <CardActionArea>
          <CardHeader title="FCC Certificate 1" />
          <CardMedia
            component="img"
            className={classes.media}
            src={JavascriptAlgo}
            title="JavaScript Algorithms and Data Structure"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This is a JavaScript Algorithms and Data Structure certificate from Free Code Camp.
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}
