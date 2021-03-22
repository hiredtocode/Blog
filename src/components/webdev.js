import React from 'react';
import { makeStyles, CardActionArea, CardActions, Collapse, IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WebDev from '../../static/images/cards/webdevmadness.jpg';

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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function WebDevMadness() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <a href="https://jasonhan.netlify.app" target="_" rel="noopener">
        {' '}
        <CardActionArea>
          <CardHeader variant="h5" component="h2" title="Web Dev Madness" subheader="February 23, 2021 ~ present" />
          <CardMedia component="img" className={classes.media} src={WebDev} title="Web Dev Madness" />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This website is my latest project which is built by using Gatsby and deployed to Netlify.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions />
      </a>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Instead of using a pre-made template, I decided to make it from scratch with help of Material UI. I will be
            using this website as a blog as well as a portfolio.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
