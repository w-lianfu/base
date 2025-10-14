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
          <Button variant="contained" color="info">to Dashboard Page</Button>
        </Link>
      </p>
      <p>~~~ Home Page ~~~</p>
      <p>~~~ Home Page ~~~</p>
    </Paper>
  );
};

export default Home;
