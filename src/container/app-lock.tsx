import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, IconButton, Typography } from '@mui/material';
import { styled, Stack, Box } from '@mui/system';
import { MdLockOpen } from 'react-icons/md';

import Color from '@tool/color';
import lock, { toggleLock } from '@store/global';

interface IProps {}

const DBox = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1555,
  backdropFilter: 'blur(0.4rem)',
  backgroundColor: Color.black(0.9),
});

const AppLock = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DBox>
      <IconButton color="primary" onClick={() => toggleLock(false)}>
        <MdLockOpen />
      </IconButton>
    </DBox>
  );
};

export default observer(AppLock);
