import React from 'react';
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PostAddIcon from '@material-ui/icons/PostAdd';

export default function Nav() {
  const style = {
    color: `red`,
  };

  return (
    // <ThemeProvider theme={theme}>
    // <nav className={classes.drawer}>
    // TODO Need to make the icons change colors too so that when the side menu is minimized users can see where they're at
    // TODO tooltip when side menu is collapsed
    // TODO clicked menu background color change (Mui selected-menus)
    <div>
      <Divider />
      <List component="nav">
        <Link to="/" activeStyle={style}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/about" activeStyle={style}>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link to="/posts" activeStyle={style}>
          <ListItem button>
            <ListItemIcon>
              <PostAddIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Posts" />
          </ListItem>
        </Link>
        <Link to="/contact" activeStyle={style}>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
        <Link to="/portfolio" activeStyle={style}>
          <ListItem button>
            <ListItemIcon>
              <LibraryBooksIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );
}
