import { createTheme } from '@mui/material';

export const appTheme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
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

export const themeFonts = {
  h1: {
    fontSize: '32px',
  },
  h2: {
    fontSize: '24px',
  },
  h3: {
    fontSize: '20px',
  },
  h4: {
    fontSize: '18px',
  },
  h5: {
    fontSize: '16px',
  },
  h6: {
    fontSize: '14px',
  },
};
