import {
  pink, red, blue, green, purple, orange,
  deepPurple, deepOrange, grey,
} from '@mui/material/colors';

import Color from '@tool/color';

const BuPalette = {
  common: {
    black: Color.black(1), // #010101FF
    white: Color.white(1), // #FAFAFAFF
  },
  primary: {
    main: blue.A700, // #2962FFFF
    dark: deepPurple.A400, // #651FFFFF
    contrastText: Color.white(1),
  },
  secondary: {
    main: purple.A400,
    contrastText: Color.white(1),
  },
  success: {
    main: Color.success(1),
    contrastText: Color.black(1),
  },
  info: {
    main: Color.info(1),
    contrastText: Color.black(1),
  },
  warning: {
    main: orange[800], // #EF6C00FF
    dark: orange[900], // #E65100FF
    contrastText: Color.white(1),
  },
  error: {
    main: deepOrange.A400, // FF3D00FF
    dark: deepOrange.A700, // DD2C00FF
    contrastText: Color.white(1),
  },
  black: {
    main: Color.black(1), // #010101FF
    contrastText: Color.white(1),
  },
  // white: {
  //   main: Color.white(1), // #FAFAFAFF
  // },
  text: {
    primary: Color.black(1),
    disabled: Color.black(0.5),
  },
  background: {
    paper: Color.white(1),
    default: Color.white(1),
  },
  grey: {
    50: grey[50],
    100: grey[100],
    200: grey[200],
    300: grey[300],
    400: grey[400],
    500: grey[500],
    600: grey[600],
    700: grey[700],
    800: grey[800],
    900: grey[900],
    A100: grey.A100,
    A200: grey.A200,
    A400: grey.A400,
    A700: grey.A700,
  },
  action: {
    disabled: Color.black(0.6),
    disabledBackground: Color.black(0.35),
  },
};

export default BuPalette;
