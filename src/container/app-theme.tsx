import { useEffect, type ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';

import DarkTheme from '@theme/dark-theme';
import LightTheme from '@theme/light-theme';

interface IProps {
  children?: ReactNode,
}

const AppTheme = (props: IProps) => {
  const { children } = props;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>{children}</ThemeProvider>
  );
};

export default AppTheme;
