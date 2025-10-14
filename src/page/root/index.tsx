import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { Paper } from '@mui/material';

import './scss/index.scss';
import AppTop from '@comp/app-top/index';
import AppStatus from '@comp/app-status/index';

interface IProps {}

const Root = (props: IProps) => {
  useEffect(() => {}, []);

  return (
    <Paper className="root-page">
      <AppTop />
      <Outlet />
      <AppStatus />
    </Paper>
  );
};

export default Root;
