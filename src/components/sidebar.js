import React from 'react';
import {
  Drawer,
  AppBar,
  Toolbar,
  Button,
  CssBaseline,
  Typography,
  IconButton,
  makeStyles,
  useTheme,
  Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'gatsby-theme-material-ui';
import clsx from 'clsx';
import Header from './header';
import Nav from './nav';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    background: `transparent`,
    color: `blue`,
    backdropFilter: `blur(20px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    background: `transparent`,
    backdropFilter: `blur(10px)`,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  header: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 18,
    paddingRight: 6,
    justifyContent: 'flex-end',
    backgroundColor: `transparent`,
    [theme.breakpoints.down('xs')]: {
      minHeight: 64,
      paddingLeft: 18,
      paddingRight: 24,
    },
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default function SidebarOpen({ children }) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div className={classes.toolbar} />
    </div>
  );
  return (
    // <ThemeProvider theme={custom}>
    <>
      <CssBaseline />
      {/* Toolbar and Drawer for below 600px */}
      <Hidden mdUp implementation="js">
        <AppBar elevation={0} position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.header}>
              <Link to="/" style={{ color: 'inherit' }}>
                <Header />
              </Link>
            </Typography>
            <Button color="inherit">LOGIN</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
          <Nav />
        </Drawer>
        {children}
      </Hidden>
      {/* Toolbar and Drawer above 600px */}
      <Hidden smDown implementation="js">
        <AppBar
          position="fixed"
          elevation={0}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.header}>
              <Link to="/" style={{ color: 'inherit' }}>
                <Header />
              </Link>
            </Typography>
            <Button color="inherit">LOGIN</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Nav />
        </Drawer>
        {children}
      </Hidden>
    </>
    // </ThemeProvider>
  );
}
