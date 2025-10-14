import { useEffect } from 'react';
import { Paper } from '@mui/material';

interface IProps {}

const Dashboard = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Paper>
      <p>------ Dashboard Page ------</p>
      <p>------ Dashboard Page ------</p>
      <p>------ Dashboard Page ------</p>
      <p>------ Dashboard Page ------</p>
      <p>------ Dashboard Page ------</p>
      <p>------ Dashboard Page ------</p>
    </Paper>
  );
};

export default Dashboard;
