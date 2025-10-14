import Color from '@tool/color';

const BuTypography = {
  htmlFontSize: 10,
  fontFamily: '"LXGW WenKai Mono TC", "-apple-system", "BlinkMacSystemFont", "Noto Sans",\
    "Droid Sans Mono", "PingFang SC", "system-ui"',
  pxToRem: (px: number) => {
    return `${px}px`;
  },
  button: {
    fontSize: '1.4rem',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.04rem',
    textTransform: undefined,
  },
  body1: {
    fontSize: '1.4rem',
    lineHeight: 1.5,
    letterSpacing: '0.02rem',
    fontWeight: 400,
  },
  body2: {
    fontSize: '1.4rem',
    lineHeight: 1.5,
    letterSpacing: '0.02rem',
    fontWeight: 400,
  },
  caption: {
    fontSize: '1.4rem',
    lineHeight: 1.5,
    letterSpacing: '0.02rem',
    fontWeight: 400,
  },
  overline: {
    fontSize: '1.4rem',
    lineHeight: 1.5,
    letterSpacing: '0.02rem',
    textTransform: undefined,
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: '1.4rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.02rem',
  },
  subtitle2: {
    fontSize: '1.4rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.02rem',
  },
  h1: {
    fontSize: '5rem',
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  h2: {
    fontSize: '4.6rem',
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  h3: {
    fontSize: '4rem',
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  h4: {
    fontSize: '3.6rem',
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  h5: {
    fontSize: '3rem',
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  h6: {
    fontSize: '2rem',
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
};

export default BuTypography;
