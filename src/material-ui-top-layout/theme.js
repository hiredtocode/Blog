import { createMuiTheme } from "@material-ui/core"
import { deepPurple, amber, grey } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#0f0",
    }
  },
  typography: {
    // fontFamily: "Comic Sans MS",
    body2: {
      // fontFamily: "Times New Roman",
      fontSize: "1.1rem",
    },
  },
  // shape: {
  //   borderRadius: 5,
  // },
  // spacing: 8,
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        padding: "20px",
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
      // variant: "contained",
      // color: "primary",
    },
    MuiCheckbox: {
      disableRipple: true,
    },
    MuiTextField: {
      // variant: "outlined",
      InputLabelProps: {
        shrink: false,
      },
    },
  },
} )

theme.props = {
  MuiButton: {
    disableElevation: false,
  },
  MuiInputLabel: {
    shrink: false
  },
  MuiInput: {
    disableUnderline: false
  },
  MuiTooltip: {
    arrow: true
  }
};

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 5,
      textTransform: "none",
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: amber,
        color: deepPurple,
      },
    },
    containedSecondary: {
      fontWeight: 500,
    },
    MuiInput: {
      root: {
        top: theme.spacing(2),
        border: `1px solid ${grey[500]}`,
        padding: theme.spacing(1),
        outline: `1px solid transparent`,
        "&$focused": {
          border: `1px solid ${theme.palette.primary.main}`,
          outline: `1px solid ${theme.palette.primary.main}`,
        },
      },
    },
    MuiInputLabel: {
      root: {
        textTransform: "uppercase",
        fontSize: "1.5rem",
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#fff",
        border: `2px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
      },
      arrow: {
        color: theme.palette.primary.main
      },
    },
  },
}

export default theme;