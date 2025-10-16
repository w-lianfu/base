import { useEffect } from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react-lite';
import {
  Paper, Box, Button, Typography,
} from '@mui/material';
import { styled } from '@mui/system';

import Color from '@tool/color';
import TeaThief from '@icon/teathief.png';
import FooterPaper from '@styled/footer-paper';

interface IProps {}

const DPaper = styled(Paper)({});
const DTypography = styled(Typography)({
  margin: '0.6rem 0',
  fontSize: '1.6rem',
});
const CTypography = styled(Typography)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
});

const Footer = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <FooterPaper>
      <img src={TeaThief} />
      <DTypography variant="body1">소중한 순간에 머물며, 창작과 티타임 속에서 이야기를 발견합니다.</DTypography>
      <Link to="about">
        <Button variant="dashed" color="primary">ABOUT</Button>
      </Link>
      <Typography variant="body2">PRIVACY POLICY</Typography>
      <CTypography variant="body1">© 2025 티띠쁘 • All rights reserved.</CTypography>
    </FooterPaper>
  );
};

export default observer(Footer);
