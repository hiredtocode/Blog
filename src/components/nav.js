import React from 'react';
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles(() => ({
  listText: {
    textAlignLast: `end`,
    paddingRight: `10px`,
  },
}));

export default function Nav() {
  const activeLink = {
    color: `red`,
  };
  const classes = useStyles();

  return (
    // TODO Need to make the icons change colors too so that when the side menu is minimized users can see where they're at
    // TODO tooltip when side menu is collapsed
    // TODO clicked menu background color change (Mui selected-menus)
    <div>
      <Divider />
      <List component="nav">
        <Link to="/" activeStyle={activeLink}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" className={classes.listText} />
          </ListItem>
        </Link>
        <Link to="/about" activeStyle={activeLink}>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" className={classes.listText} />
          </ListItem>
        </Link>
        <Link to="/posts" activeStyle={activeLink}>
          <ListItem button>
            <ListItemIcon>
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText primary="Posts" className={classes.listText} />
          </ListItem>
        </Link>
        <Link to="/contact" activeStyle={activeLink}>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" className={classes.listText} />
          </ListItem>
        </Link>
        <Link to="/portfolio" activeStyle={activeLink}>
          <ListItem button>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Portfolio" className={classes.listText} />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );
}
