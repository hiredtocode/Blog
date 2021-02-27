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
import './nav.css';

export default function Nav() {
  return (
    // <ThemeProvider theme={theme}>
    <div>
      <CssBaseline />
      {/* //TODO active link highlight not working using activeStyle (Gatsby) check material UI active link */}
      <Divider />
      <List component="nav">
        <Link to="/" activeStyle={{ backgroundColor: 'blue' }}>
          <ListItem button disableRipple style={{ paddingLeft: 24 }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText secondary="Home" />
          </ListItem>
        </Link>
        <Link to="/about" activeStyle={{ backgroundColor: 'blue' }}>
          <ListItem button disableRipple style={{ paddingLeft: 24 }}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link to="/posts" activeStyle={{ backgroundColor: 'blue' }}>
          <ListItem button disableRipple style={{ paddingLeft: 24 }}>
            <ListItemIcon>
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText secondary="Posts" />
          </ListItem>
        </Link>
        <Link to="/contact" activeStyle={{ backgroundColor: 'blue' }}>
          <ListItem button disableRipple style={{ paddingLeft: 24 }}>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText secondary="Contact" />
          </ListItem>
        </Link>
        <Link to="/portfolio" activeStyle={{ backgroundColor: 'blue' }}>
          <ListItem button disableRipple style={{ paddingLeft: 24 }}>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText secondary="Portfolio" />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );
}
