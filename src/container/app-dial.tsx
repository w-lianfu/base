import { useEffect, useState, type SyntheticEvent } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import {
  Paper, Button, Typography, SpeedDial,
  SpeedDialIcon, SpeedDialAction,
} from '@mui/material';
import { styled, Stack } from '@mui/system';
import {
  MdHome, MdLock, MdLockOpen, MdRefresh,
  MdArrowUpward, MdArrowDownward, MdDarkMode, MdLightMode,
} from 'react-icons/md';

import Color from '@tool/color';
import moGlobal, {
  togglaDial, toggleLock, changeTheme,
} from '@store/global';

interface IProps {}

const DPaper = styled(Paper)({});
const DStack = styled(Stack)({
  position: 'fixed',
  bottom: '1rem',
  right: '1rem',
  display: 'flex',
  zIndex: 1010,
});

const AppDial = (props: IProps) => {
  const navi = useNavigate();
  const { theme, isDial } = moGlobal;
  const actions = [
    { icon: <MdHome />, name: 'Home' },
    { icon: theme === 'light' ? <MdDarkMode /> : <MdLightMode />, name: 'Theme' },
    { icon: <MdLock />, name: 'Lock' },
    { icon: <MdRefresh />, name: 'Refresh' },
    { icon: <MdArrowDownward />, name: 'Bottom' },
    { icon: <MdArrowUpward />, name: 'Top' },
  ];

  useEffect(() => {
    return () => {};
  }, []);

  const onDial = (ev: SyntheticEvent, name: string) => {
    ev.stopPropagation();
    if (name === 'Home') navi('/');
    else if (name === 'Theme') {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      changeTheme(newTheme);
    } else if (name === 'Refresh') location.reload();
    else if (name === 'Lock') toggleLock(true);
    else if (name === 'Top') {
      // Scroll to page top
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } else if (name === 'Bottom') {
      // Scroll to page end
      document.documentElement.scrollTo({
        left: 0,
        top: document.body.clientHeight,
        behavior: 'smooth',
      });
    }
    togglaDial(false);
  };

  const onOpen = (ev: SyntheticEvent) => {
    ev.stopPropagation();
    togglaDial(true);
  };

  const onClose = (ev: SyntheticEvent) => {
    ev.stopPropagation();
    togglaDial(false);
  };

  return (
    <DStack>
      <SpeedDial ariaLabel="Dial" icon={<SpeedDialIcon />} open={isDial}
        onOpen={(ev: SyntheticEvent<any, Event>, reason: any) => onOpen(ev)}
        onClose={(ev: SyntheticEvent<any, Event>) => onClose(ev)}>
        {actions.map(action => (
          <SpeedDialAction key={action.name} icon={action.icon}
            tooltipTitle={action.name}
            onClick={(ev: SyntheticEvent) => onDial(ev, action.name)} />
        ))}
      </SpeedDial>
    </DStack>
  );
};

export default observer(AppDial);
