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
import NamaSushiImage from '../../static/images/cards/namasushi.jpg';

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

export default function NamaSushi() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <a href="https://namasushi.ca" target="_" rel="noopener">
        {' '}
        <CardActionArea>
          <CardHeader variant="h5" component="h2" title="Nama Sushi" subheader="September 14, 2016" />
          <CardMedia component="img" className={classes.media} src={NamaSushiImage} title="Nama Sushi" />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This website was built using Wordpress for one of my client in 2016.
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
            I've made a few websites like these in the past but they all went out of business and the websites don't
            exist anymore...
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
