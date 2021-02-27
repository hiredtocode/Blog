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
import { makeStyles } from '@material-ui/core/styles';

// import './nav.css';

export default function Nav() {
  const style = {
    color: `red`,
  };

  return (
    // <ThemeProvider theme={theme}>
    <div>
      <CssBaseline />
      {/* //TODO active link highlight not working using activeStyle (Gatsby) check material UI active link */}
      <Divider />
      <List component="nav">
        <Link to="/" activeStyle={style}>
          <ListItem button disableRipple style={{ paddingLeft: 24 }}>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/about" activeStyle={{ color: 'red' }}>
          <ListItem button disableRipple style={{ paddingLeft: 24 }}>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link to="/posts" activeStyle={{ color: 'red' }}>
          <ListItem button disableRipple style={{ paddingLeft: 24 }}>
            <ListItemIcon>
              <PostAddIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Posts" />
          </ListItem>
        </Link>
        <Link to="/contact" activeStyle={{ color: 'red' }}>
          <ListItem button disableRipple style={{ paddingLeft: 24 }}>
            <ListItemIcon>
              <ContactMailIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
        <Link to="/portfolio" activeStyle={{ color: 'red' }}>
          <ListItem button disableRipple style={{ paddingLeft: 24 }}>
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
