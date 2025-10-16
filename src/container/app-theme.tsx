import { useEffect, type ReactNode, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from '@mui/material';
import localforage from 'localforage';

import moGlobal, { changeTheme } from '@store/global';
import DarkTheme from '@theme/dark-theme';
import LightTheme from '@theme/light-theme';

interface IProps {
  children?: ReactNode,
}

const AppTheme = (props: IProps) => {
  const { children } = props;
  const { theme } = moGlobal;

  // eslint-disable-next-line react-hooks/use-memo
  useMemo(async() => {
    const initValue: any = await localforage.getItem('theme');
    // localforage中已存在theme的值，直接返回
    if (initValue === 'light' || initValue === 'dark') {
      // 若localforage中theme的值与mobx中theme的值不同
      // 则改变mobx中的theme值
      if (initValue !== theme) changeTheme(initValue);
      return;
    }

    // localforage中没有theme的值，设为默认值
    if (!initValue) {
      localforage.setItem('theme', 'light');
      changeTheme('light');
    }
  }, [theme]);

  return (
    <>
      {theme ? (
        <ThemeProvider theme={theme === 'light' ? LightTheme :  DarkTheme}>
          {children}
        </ThemeProvider>
      ) : null}
    </>
  );
};

export default observer(AppTheme);
