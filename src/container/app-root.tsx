import { useEffect } from 'react';

import AppTheme from './app-theme';
import AppRouter from './app-router';

interface IProps {}

const AppRoot = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};

export default AppRoot;
