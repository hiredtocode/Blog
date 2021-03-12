import { createMuiTheme } from '@material-ui/core';
import { deepPurple, amber } from '@material-ui/core/colors';

const CustomTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#f1f1f1',
    },
    secondary: {
      main: '#242424',
    },
    text: {
      primary: 'rgba(222,136,17,0.87)',
      secondary: 'rgba(111,103,103,0.87)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    // fontFamily: "Comic Sans MS",

    body2: {
      // fontFamily: "Times New Roman",
      fontSize: '1.1rem',
      secondary: {
        main: '#222',
      },
    },
  },
  // shape: {
  //   borderRadius: 5,
  // },
  // spacing: 8,
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '20px',
      },
    },
    MuiListItemText: {
      color: 'MuiListItemText-primary',
    },
  },

  props: {
    MuiButtonBase: {
      disableRipple: true,
      // variant: "contained",
      // color: "primary",
    },
    MuiCheckbox: {
      // disableRipple: true,
    },
    MuiTextField: {
      // variant: "outlined",
      // InputLabelProps: {
      //   shrink: false,
      // },
    },
  },
  MuiListItemIcon: {
    root: {
      color: '#fff',
    },
  },
});

CustomTheme.props = {
  // MuiButton: {
  //   disableElevation: false,
  // },
  // MuiInputLabel: {
  //   shrink: false
  // },
  // MuiInput: {
  //   disableUnderline: false
  // },
  // MuiTooltip: {
  //   arrow: true
  // }
};

CustomTheme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 5,
      textTransform: 'none',
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: amber,
        color: deepPurple,
      },
    },
  },
};

export default CustomTheme;
