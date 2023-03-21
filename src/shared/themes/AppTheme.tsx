import { createMuiTheme } from "@mui/material";

const appTheme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontSize: 14,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default appTheme;
