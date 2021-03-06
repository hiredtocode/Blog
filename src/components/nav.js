import React from 'react';
import { ListItemIcon, ListItemText, makeStyles, MenuItem, MenuList } from '@material-ui/core';
import { Link } from 'gatsby';
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

  navLink: {
    position: `relative`,
    '&.active': {
      color: 'blue',
    },
  },
}));

export default function Nav() {
  const classes = useStyles();

  // Handles partially active link stylings
  const activeStyle = {
    color: 'blue',
  };
  const navLink = {
    '&:hover': {
      backgroundColor: `#eceff1`,
    },
    '&.active': {
      color: 'blue',
    },
  };

  const isPartiallyActive = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent ? { style: { ...navLink, ...activeStyle } } : null;

  return (
    // TODO Need to make the icons change colors too so that when the side menu is minimized users can see where they're at
    // TODO tooltip when side menu is collapsed
    // TODO clicked menu background color change (Mui selected-menus)
    <MenuList>
      <MenuItem component={Link} to="/" className={classes.navLink} activeClassName="active">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" className={classes.listText} />
      </MenuItem>
      <MenuItem component={Link} to="/about" className={classes.navLink} activeClassName="active">
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" className={classes.listText} />
      </MenuItem>
      <MenuItem
        component={Link}
        to="/posts"
        className={classes.navLink}
        activeStyle={activeStyle}
        getProps={isPartiallyActive}
      >
        <ListItemIcon>
          <PostAddIcon />
        </ListItemIcon>
        <ListItemText primary="Posts" className={classes.listText} />
      </MenuItem>
      <MenuItem component={Link} to="/contact" className={classes.navLink} activeClassName="active">
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" className={classes.listText} />
      </MenuItem>
      <MenuItem component={Link} to="/portfolio" className={classes.navLink} activeClassName="active">
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Portfolio" className={classes.listText} />
      </MenuItem>
    </MenuList>
  );
}
