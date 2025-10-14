const Color = {
  primary: (opacity = 1) => `rgba(41, 98, 255, ${opacity})`,
  secondary: (opacity = 1) => `rgba(213, 0, 249, ${opacity})`,
  success: (opacity = 1) => `rgba(33, 186, 69, ${opacity})`,
  info: (opacity = 1) => `rgba(55, 202, 221, ${opacity})`,
  warning: (opacity = 1) => `rgba(239, 108, 0, ${opacity})`,
  error: (opacity = 1) => `rgba(255, 61, 0, ${opacity})`,
  black: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
  white: (opacity = 1) => `rgba(250, 250, 250, ${opacity})`,
  copper: (opacity = 1) => `rgba(255, 219, 1, ${opacity})`,
  gray: (opacity = 1) => `rgba(97, 97, 97, ${opacity})`,
};

export default Color;
