import { createTheme } from '@mui/material/styles';

import Color from '@tool/color';
import BuPalette from './bu-palette';
import BuTypography from './bu-typography';
import BuDarkButton from './bu-dark-button';

const DarkTheme = createTheme({
  shape: { borderRadius: 0 },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  palette: {
    ...BuPalette,
    black: {
      main: Color.white(1),
      contrastText: Color.black(1),
    },
    text: {
      primary: Color.white(1),
      disabled: Color.white(0.5),
    },
    background: {
      paper: Color.black(1),
      default: Color.black(1),
    },
  },
  typography: BuTypography,
  components: {
    // MuiContainer
    // https://mui.com/material-ui/react-container/
    MuiContainer: {
      defaultProps: {
        component: 'section',
        disableGutters: true,
        maxWidth: false,
      },
      styleOverrides: {
        root: {},
      },
    },
    // MuiPaper
    // https://mui.com/material-ui/react-paper/
    MuiPaper: {
      defaultProps: {
        square: true,
        elevation: 0,
        component: 'section',
      },
      styleOverrides: {
        root: {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
      },
    },
    // MuiStack
    // https://mui.com/material-ui/react-stack/
    MuiStack: {
      defaultProps: {
        direction: 'column',
        component: 'section',
        spacing: 0,
      },
      styleOverrides: {
        root: {},
      },
    },
    // MuiTypography
    // https://mui.com/material-ui/react-typography/
    MuiTypography: {
      defaultProps: {
        noWrap: false,
        variantMapping: {
          subtitle1: 'p',
          subtitle2: 'p',
          caption: 'p',
        },
      },
    },
    // MuiSpeedDial
    // https://mui.com/material-ui/react-speed-dial/
    MuiSpeedDial: {
      styleOverrides: {
        root: {
          position: 'relative',
          width: '5.6rem',

          '& .MuiSpeedDial-actions': {
            marginBottom: '-2.8rem',
            paddingBottom: '3.2rem',
          },
          '& .MuiSpeedDial-fab': {
            position: 'relative',
            width: '5.6rem',
            height: '5.6rem',
          },
          '& .MuiSpeedDialAction-fab': {
            position: 'relative',
            width: '4.6rem',
            height: '4.6rem',
            margin: '0.8rem',
            fontSize: '2rem',
            color: Color.primary(1),
            backgroundColor: Color.white(1),

            '&:hover': { backgroundColor: Color.white(0.85) },
          },
        },
      },
    },
    // MuiButton
    // https://mui.com/material-ui/react-button/
    MuiButton: {
      defaultProps: BuDarkButton.defaultProps,
      styleOverrides: BuDarkButton.styleOverrides,
      variants: BuDarkButton.variants as any,
    },
    // MuiIconButton
    // https://mui.com/material-ui/api/icon-button/
    MuiIconButton: {},
  },
});

export default DarkTheme;
