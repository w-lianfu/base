import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper } from '@mui/material';

import './scss/index.scss';
import moGlobal from '@store/global';
import AppTop from '@comp/app-top/index';
import AppStatus from '@comp/app-status/index';
import AppDial from '@con/app-dial';
import AppLock from '@con/app-lock';
import Header from '@comp/header/index';

interface IProps {}

const Root = (props: IProps) => {
  const { isLock } = moGlobal;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Paper className="root-page">
      <AppTop />
      <Header />
      <Outlet />
      <AppStatus />

      <AppDial />
      {isLock ? <AppLock /> : null}
    </Paper>
  );
};

export default observer(Root);
