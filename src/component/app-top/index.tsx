import { useEffect } from 'react';

import './index.scss';

interface IProps {}

const AppTop = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <p className="app-top" />
  );
};

export default AppTop;
