import { useEffect } from 'react';
import {
  Routes, Route, Outlet, useNavigate, Link,
} from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Button } from '@mui/material';

import './scss/index.scss';
import Home from '@page/home/index';
import Footer from '@comp/footer/index';

interface IProps {}

const Dashboard = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Paper className="dashboard-page">
      <Paper className="dashboard-container">
        <p>
          <Link to="home">
            <Button variant="contained" color="primary">to Home Page</Button>
          </Link>
        </p>
        <p><Button variant="contained" color="secondary">杭州 - 杭州 - 杭州</Button></p>
        <p><Button variant="contained" color="error">St Peterburg - St Petersburg</Button></p>
        <p><Button variant="contained" color="warning">St Peterburg - St Petersburg</Button></p>
        <p><Button variant="contained" color="success">杭州 - 杭州 - 杭州</Button></p>
        <p><Button variant="contained" color="info">杭州 - 杭州 - 杭州</Button></p>
        <p><Button variant="outlined" color="primary">上海 - 上海 - 上海</Button></p>
        <p><Button variant="outlined" color="secondary">St Peterburg - St Petersburg</Button></p>
        <p><Button variant="outlined" color="error">上海 - 北京 - 深圳 - 广州</Button></p>
        <p><Button variant="outlined" color="warning">上海 - 北京 - 深圳 - 广州</Button></p>
        <p><Button variant="outlined" color="success">上海 - 上海 - 上海</Button></p>
        <p><Button variant="outlined" color="info">上海 - 上海 - 上海</Button></p>
      </Paper>
      <Footer />
    </Paper>
  );
};

export default observer(Dashboard);
