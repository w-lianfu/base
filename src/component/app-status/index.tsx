import { useEffect } from 'react';

import './index.scss';

interface IProps {}

const AppStatus = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <p className="app-status" />
  );
};

export default AppStatus;
