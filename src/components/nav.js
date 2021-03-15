import React from 'react';
import { ListItemIcon, ListItemText, makeStyles, MenuItem, MenuList } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
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
  navLink: {
    '&:hover': {
      backgroundColor: `#aeae`,
    },
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    // TODO Need to make the icons change colors too so that when the side menu is minimized users can see where they're at
    // TODO tooltip when side menu is collapsed
    // TODO clicked menu background color change (Mui selected-menus)
    <MenuList>
      <MenuItem component={Link} to="/" className={classes.navLink}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" className={classes.listText} />
      </MenuItem>
      <MenuItem component={Link} to="/about" className={classes.navLink}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" className={classes.listText} />
      </MenuItem>
      <MenuItem component={Link} to="/posts" className={classes.navLink}>
        <ListItemIcon>
          <PostAddIcon />
        </ListItemIcon>
        <ListItemText primary="Posts" className={classes.listText} />
      </MenuItem>
      <MenuItem component={Link} to="/contact" className={classes.navLink}>
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" className={classes.listText} />
      </MenuItem>
      <MenuItem component={Link} to="/portfolio" className={classes.navLink}>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Portfolio" className={classes.listText} />
      </MenuItem>
    </MenuList>
  );
}
