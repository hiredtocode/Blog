import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#262626',
    },
    secondary: {
      main: '#ff0303',
    },
    type: `light`,
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiLink: {
      underline: `none`,
    },
    MuiContainer: {},
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          height: `100%`,
          scrollBehavior: `smooth`,
          scrollPaddingTop: `80px`,
        },
        a: {
          color: `#262626`,
          textDecoration: `none`,

          '&:visited': {
            color: `#767676`,
          },
          '&:hover': {
            color: `#4600a7`,
          },
          '&.active': {
            color: `#444444`,
            fontWeight: `bold`,
          },
        },
      },
    },
  },
});

// Set dark mode automatically
// function App() {
//  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

//  const theme = React.useMemo(
//    () =>
//      createMuiTheme({
//        palette: {
//          type: prefersDarkMode ? 'dark' : 'light',
//        },
//      }),
//    [prefersDarkMode]
//  );
// }

export default theme;
