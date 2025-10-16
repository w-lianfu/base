import { useEffect } from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react-lite';
import {
  Paper, Box, Button, Typography,
} from '@mui/material';

import HeaderPaper from '@styled/header-paper';
import TeaThief from '@icon/teathief.png';

interface IProps {}

const Header = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <HeaderPaper>
      <img src={TeaThief} />
      <Box>
        <Button variant="dashed" color="primary">About</Button>
        <Button variant="dashed" color="warning">Blog</Button>
        <Button variant="dashed" color="success">Contact</Button>
      </Box>
    </HeaderPaper>
  );
};

export default observer(Header);
