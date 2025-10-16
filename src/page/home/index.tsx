import { useEffect } from 'react';
import { Link } from 'react-router';
import { Paper, Button } from '@mui/material';

import './scss/index.scss';

interface IProps {}

const Home = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Paper className="home-page">
      <p>
        <Link to="/">
          <Button variant="dashed" color="primary">to Dashboard Page</Button>
        </Link>
      </p>
      <p><Button variant="dashed" color="secondary">上海 - 上海 - 上海</Button></p>
      <p><Button variant="dashed" color="error">上海 - 上海 - 上海</Button></p>
      <p><Button variant="dashed" color="warning">St Petersburg - St Petersburg</Button></p>
      <p><Button variant="dashed" color="success">上海 - 上海 - 上海</Button></p>
      <p><Button variant="dashed" color="info">上海 - 上海 - 上海</Button></p>
      <p><Button variant="contained" disabled={true}>上海 - 上海 - 上海</Button></p>
    </Paper>
  );
};

export default Home;
