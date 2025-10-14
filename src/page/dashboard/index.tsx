import { useEffect } from 'react';
import { Routes, Route, Outlet, useNavigate, Link } from 'react-router';
import { Paper, Button } from '@mui/material';

import './scss/index.scss';
import Home from '@page/home/index';

interface IProps {}

const Dashboard = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Paper className="dashboard-page">
      <Paper className="dashboard-container">
        <p>------ Dashboard Page ------</p>
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
        <p>------ outlined outlined outlined ------</p>
        <p><Button variant="outlined" color="primary">上海 - 上海 - 上海</Button></p>
        <p><Button variant="outlined" color="secondary">St Peterburg - St Petersburg</Button></p>
        <p><Button variant="outlined" color="error">上海 - 北京 - 深圳 - 广州</Button></p>
        <p><Button variant="outlined" color="warning">上海 - 北京 - 深圳 - 广州</Button></p>
        <p><Button variant="outlined" color="success">上海 - 上海 - 上海</Button></p>
        <p><Button variant="outlined" color="info">上海 - 上海 - 上海</Button></p>
        <p>------ dashed dashed dashed ------</p>
        <p><Button variant="contained" disabled={true}>上海 - 上海 - 上海</Button></p>
        <p><Button variant="dashed" color="primary">上海 - 上海 - 上海</Button></p>
        <p><Button variant="dashed" color="secondary">上海 - 上海 - 上海</Button></p>
        <p><Button variant="dashed" color="error">上海 - 上海 - 上海</Button></p>
        <p><Button variant="dashed" color="warning">St Petersburg - St Petersburg</Button></p>
        <p><Button variant="dashed" color="success">上海 - 上海 - 上海</Button></p>
        <p><Button variant="dashed" color="info">上海 - 上海 - 上海</Button></p>
        <p><Button variant="dashed" color="primary">上海 - 上海 - 上海</Button></p>
        <p><Button variant="dashed" color="error">上海 - 上海 - 上海</Button></p>
        <p><Button variant="dashed" color="primary">上海 - 上海 - 上海</Button></p>
        <p>
          <Link to="/">
            <Button variant="dashed" color="error">to Dashboard Page</Button>
          </Link>
        </p>
        <p><Button variant="dashed" color="primary">St Petersburg - St Petersburg</Button></p>
        <p><Button variant="dashed" color="error">St Petersburg - St Petersburg</Button></p>
        <p><Button variant="dashed" color="primary">St Petersburg - St Petersburg</Button></p>
        <p><Button variant="dashed" color="error">St Petersburg - St Petersburg</Button></p>
        <p><Button variant="dashed" color="primary">St Petersburg - St Petersburg</Button></p>
        <p><Button variant="dashed" color="error">St Petersburg - St Petersburg</Button></p>
        <p><Button variant="dashed" color="success">杭州 - 苏州 - 南京 - 成都 - 宁波</Button></p>
        <p><Button variant="dashed" color="success">杭州 - 苏州 - 南京 - 成都 - 宁波</Button></p>
        <p><Button variant="dashed" color="success">杭州 - 苏州 - 南京 - 成都 - 宁波</Button></p>
        <p>
          <Link to="home">
            <Button variant="dashed" color="success">to Home Page</Button>
          </Link>
        </p>
        <p><Button variant="dashed" color="warning">杭州 - 苏州 - 南京 - 成都 - 宁波</Button></p>
        <p><Button variant="dashed" color="warning">杭州 - 苏州 - 南京 - 成都 - 宁波</Button></p>
        <p><Button variant="dashed" color="warning">杭州 - 苏州 - 南京 - 成都 - 宁波</Button></p>
        <p><Button variant="dashed" color="warning">杭州 - 苏州 - 南京 - 成都 - 宁波</Button></p>
        <p><Button variant="dashed" color="warning">杭州 - 苏州 - 南京 - 成都 - 宁波</Button></p>
        <p>------ end end end ------</p>
      </Paper>
    </Paper>
  );
};

export default Dashboard;
