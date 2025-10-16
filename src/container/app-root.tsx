import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CssBaseline } from '@mui/material';

import '@lib/swiper/swiper.scss';
import '@lib/swiper/navigation.scss';
import '@lib/swiper/pagination.scss';
import '@lib/viewer/viewer.scss';
import '@scss/index.scss';
import { toggleLock, changeClient } from '@store/global';
import AppTheme from './app-theme';
import AppRouter from './app-router';

interface IProps {}

const AppRoot = (props: IProps) => {
  const onResize = () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    changeClient(width, height);
  };
  const onKeyboard = (ev: any) => {
    if (ev.key === 'r') location.reload();
    else if (ev.key === 'L') {
      toggleLock(true);
    } else if (ev.key === 'U') {
      toggleLock(false);
    } else if (ev.key === 'j') {
      // scroll to the bottom 10 distance
      window.scrollBy({
        top: -30,
        behavior: 'smooth',
      });
    } else if (ev.key === 'k') {
      // scroll to the top 10 distance
      window.scrollBy({
        top: 30,
        behavior: 'smooth',
      });
    } else if (ev.key === 'G') {
      // Scroll to page end
      document.documentElement.scrollTo({
        left: 0,
        top: document.body.clientHeight,
        behavior: 'smooth',
      });
    } else if (ev.key === 'g') {
      // Scroll to page end
      document.documentElement.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize, false);
    window.addEventListener('keypress', onKeyboard, false);

    return () => {
      window.removeEventListener('resize', onResize, false);
      window.removeEventListener('keypress', onKeyboard, false);
    };
  }, []);

  return (
    <AppTheme>
      <CssBaseline enableColorScheme={true} />
      <AppRouter />
    </AppTheme>
  );
};

export default observer(AppRoot);
