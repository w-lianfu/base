import Color from '@tool/color';

const BuButton = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '&.Mui-disabled': {
        color: Color.white(0.6),
        backgroundColor: Color.white(0.35),
      },
    },
    textPrimary: {
      color: Color.white(1),
      border: `0.1rem solid ${Color.primary(1)}`,
      background: `linear-gradient(
        45deg,
        ${Color.primary(1)},
        ${Color.primary(0.1)},
        ${Color.primary(1)}
      )`,
      '&:hover': { backgroundColor: Color.primary(0.3) },
    },
    textSecondary: {
      color: Color.white(1),
      border: `0.1rem solid ${Color.secondary(1)}`,
      background: `linear-gradient(
        135deg,
        ${Color.secondary(1)},
        ${Color.secondary(0.1)},
        ${Color.secondary(1)}
      )`,
      '&:hover': { backgroundColor: Color.secondary(0.3) },
    },
    textSuccess: {
      color: Color.white(1),
      border: `0.1rem solid ${Color.success(1)}`,
      background: `linear-gradient(
        135deg,
        ${Color.success(1)},
        ${Color.success(0.1)},
        ${Color.success(1)}
      )`,
      '&:hover': { backgroundColor: Color.success(0.3) },
    },
    textInfo: {
      color: Color.white(1),
      border: `0.1rem solid ${Color.info(1)}`,
      background: `linear-gradient(
        135deg,
        ${Color.info(1)},
        ${Color.info(0.1)},
        ${Color.info(1)}
      )`,
      '&:hover': { backgroundColor: Color.info(0.3) },
    },
    textWarning: {
      color: Color.white(1),
      border: `0.1rem solid ${Color.warning(1)}`,
      background: `linear-gradient(
        135deg,
        ${Color.warning(1)},
        ${Color.warning(0.1)},
        ${Color.warning(1)}
      )`,
      '&:hover': { backgroundColor: Color.warning(0.3) },
    },
    textError: {
      color: Color.white(1),
      border: `0.1rem solid ${Color.error(1)}`,
      background: `linear-gradient(
        45deg,
        ${Color.error(1)},
        ${Color.error(0.1)},
        ${Color.error(1)}
      )`,
      '&:hover': { backgroundColor: Color.error(0.3) },
    },
    text: {
      color: Color.white(1),
      border: `0.1rem solid ${Color.white(1)}`,
      background: `linear-gradient(
        45deg,
        ${Color.white(1)},
        ${Color.white(0.1)},
        ${Color.white(1)}
      )`,
      '&:hover': { backgroundColor: Color.black(0.3) },
    },
  },
  variants: [
    /** ----- gradient primary ----- */
    {
      props: {
        variant: 'gradient',
        color: 'primary',
      },
      style: {
        color: Color.black(1),
        background: `linear-gradient(
          135deg,
          rgba(255, 0, 0, 1) 0%,
          rgba(255, 154, 0, 1) 10%,
          rgba(208, 222, 33, 1) 20%,
          rgba(79, 220, 74, 1) 30%,
          rgba(63, 218, 216, 1) 40%,
          rgba(47, 201, 226, 1) 50%,
          rgba(28, 127, 238, 1) 60%,
          rgba(95, 21, 242, 1) 70%,
          rgba(186, 12, 248, 1) 80%,
          rgba(251, 7, 217, 1) 90%,
          rgba(255, 0, 0, 1) 100%
        )`,
        // animation: 'gradient 3s linear infinite',

        '&:hover': {
          animation: 'gradient 1s linear',
        },
      },
    },
    /** ----- gradient secondary ----- */
    {
      props: {
        variant: 'gradient',
        color: 'secondary',
      },
      style: {
        color: Color.black(1),
        background: `linear-gradient(
          135deg,
          ${Color.secondary(1)},
          ${Color.copper(1)},
          ${Color.secondary(1)}
        )`,
      },
    },
    /** ----- gradient success ----- */
    {
      props: {
        variant: 'gradient',
        color: 'success',
      },
      style: {
        color: Color.black(1),
        background: `linear-gradient(
          135deg,
          ${Color.success(1)},
          ${Color.copper(1)},
          ${Color.success(1)}
        )`,
      },
    },
    /** ----- gradient info ----- */
    {
      props: {
        variant: 'gradient',
        color: 'info',
      },
      style: {
        color: Color.black(1),
        background: `linear-gradient(
          135deg,
          ${Color.info(1)},
          ${Color.copper(1)},
          ${Color.info(1)}
        )`,
      },
    },
    /** ----- gradient warning ----- */
    {
      props: {
        variant: 'gradient',
        color: 'warning',
      },
      style: {
        color: Color.black(1),
        background: 'linear-gradient(135deg, #FF512F 0%, #DD2476 100%)',
      },
    },
    /** ----- gradient error ----- */
    {
      props: {
        variant: 'gradient',
        color: 'error',
      },
      style: {
        color: Color.black(1),
        // background: 'linear-gradient(135deg, #4218B8 0%, #00C0FF 50%, #4218B8)',
        background: `linear-gradient(
          135deg,
          ${Color.error(1)},
          ${Color.copper(1)},
          ${Color.error(1)}
        )`,
      },
    },
    /** ----- gradient black ----- */
    {
      props: {
        variant: 'gradient',
        color: 'black',
      },
      style: {
        color: Color.black(1),
        background: 'linear-gradient(135deg, #4218B8 0%, #00C0FF 50%, #4218B8)',
      },
    },
    /** ----- dashed primary ----- */
    {
      props: {
        variant: 'dashed',
        color: 'primary',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem dashed ${Color.primary(1)}`,
        background: `linear-gradient(
          135deg,
          ${Color.primary(1)},
          ${Color.primary(0.1)},
          ${Color.primary(1)}
        )`,
      },
    },
    /** ----- dashed secondary ----- */
    {
      props: {
        variant: 'dashed',
        color: 'secondary',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem dashed ${Color.secondary(1)}`,
        background: `linear-gradient(
          135deg,
          ${Color.secondary(1)},
          ${Color.secondary(0.1)},
          ${Color.secondary(1)}
        )`,
      },
    },
    /** ----- dashed success ----- */
    {
      props: {
        variant: 'dashed',
        color: 'success',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem dashed ${Color.success(1)}`,
        background: `linear-gradient(
          135deg,
          ${Color.success(1)},
          ${Color.success(0.1)},
          ${Color.success(1)}
        )`,
      },
    },
    /** ----- dashed info ----- */
    {
      props: {
        variant: 'dashed',
        color: 'info',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem dashed ${Color.info(1)}`,
        background: `linear-gradient(
          135deg,
          ${Color.info(1)},
          ${Color.info(0.1)},
          ${Color.info(1)}
        )`,
      },
    },
    /** ----- dashed warning ----- */
    {
      props: {
        variant: 'dashed',
        color: 'warning',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem dashed ${Color.warning(1)}`,
        background: `linear-gradient(
          135deg,
          ${Color.warning(1)},
          ${Color.warning(0.1)},
          ${Color.warning(1)}
        )`,
      },
    },
    /** ----- dashed error ----- */
    {
      props: {
        variant: 'dashed',
        color: 'error',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem dashed ${Color.error(1)}`,
        background: `linear-gradient(
          135deg,
          ${Color.error(1)},
          ${Color.error(0.1)},
          ${Color.error(1)}
        )`,
      },
    },
    /** ----- dashed black ----- */
    {
      props: {
        variant: 'dashed',
        color: 'black',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem dashed ${Color.white(1)}`,
        background: `linear-gradient(
          135deg,
          ${Color.white(1)},
          ${Color.white(0.1)},
          ${Color.white(1)}
        )`,
      },
    },
    /** ----- outlined primary ----- */
    {
      props: {
        variant: 'outlined',
        color: 'primary',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem solid ${Color.primary(1)}`,
        backgroundColor: Color.primary(0.2),
      },
    },
    /** ----- outlined secondary ----- */
    {
      props: {
        variant: 'outlined',
        color: 'secondary',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem solid ${Color.secondary(1)}`,
        backgroundColor: Color.secondary(0.2),
      },
    },
    /** ----- outlined success ----- */
    {
      props: {
        variant: 'outlined',
        color: 'success',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem solid ${Color.success(1)}`,
        backgroundColor: Color.success(0.2),
      },
    },
    /** ----- outlined info ----- */
    {
      props: {
        variant: 'outlined',
        color: 'info',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem solid ${Color.info(1)}`,
        backgroundColor: Color.info(0.2),
      },
    },
    /** ----- outlined warning ----- */
    {
      props: {
        variant: 'outlined',
        color: 'warning',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem solid ${Color.error(1)}`,
        backgroundColor: Color.error(0.2),
      },
    },
    /** ----- outlined error ----- */
    {
      props: {
        variant: 'outlined',
        color: 'error',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem solid ${Color.error(1)}`,
        backgroundColor: Color.error(0.2),
      },
    },
    /** ----- outlined black ----- */
    {
      props: {
        variant: 'outlined',
        color: 'black',
      },
      style: {
        color: Color.white(1),
        border: `0.1rem solid ${Color.white(1)}`,
        backgroundColor: Color.white(0.2),
      },
    },
  ],
};

export default BuButton;
