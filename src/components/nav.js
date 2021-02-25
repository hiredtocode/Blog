import React from "react"
import Header from "./header"
import clsx from "clsx"
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  useTheme,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { Link } from "gatsby-theme-material-ui"
import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from "@material-ui/icons/Info"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import ContactMailIcon from "@material-ui/icons/ContactMail"
import PostAddIcon from "@material-ui/icons/PostAdd"
import "./nav.css"


const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },

}))

export default function Nav () {

  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
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
          <Typography variant="h6" noWrap>
            <Header />
          </Typography>
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
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List component="nav">
          <Link to="/" className="link">
            <ListItem button style={{ paddingLeft: 24 }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText secondary="Home" />
            </ListItem>
          </Link>

          <Link to="/about" className="link">
            <ListItem button style={{ paddingLeft: 24 }}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText secondary={"About"} />
            </ListItem>
          </Link>
          <Link to="/posts" className="link">
            <ListItem button style={{ paddingLeft: 24 }}>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText secondary={"Posts"} />
            </ListItem>
          </Link>
          <Link to="/contact" className="link">
            <ListItem button style={{ paddingLeft: 24 }}>
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText secondary={"Contact"} />
            </ListItem>
          </Link>
          <Link to="/portfolio" className="link">
            <ListItem button style={{ paddingLeft: 24 }}>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText secondary={"Portfolio"} />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
    </div>
  )
}
