import React from 'react';
import {
  List,
  CssBaseline,
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
    // TODO Need to make the icons change colors too so that when the sidemenu is minimized users can see where they're at
    // TODO tooltip when side menu is collapsed
    <div>
      <CssBaseline />
      <Divider />
      <List component="nav">
        <Link to="/" activeStyle={style}>
          <ListItem button disableRipple>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/about" activeStyle={style}>
          <ListItem button disableRipple>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link to="/posts" activeStyle={style}>
          <ListItem button disableRipple>
            <ListItemIcon>
              <PostAddIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Posts" />
          </ListItem>
        </Link>
        <Link to="/contact" activeStyle={style}>
          <ListItem button disableRipple>
            <ListItemIcon>
              <ContactMailIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
        <Link to="/portfolio" activeStyle={style}>
          <ListItem button disableRipple>
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
