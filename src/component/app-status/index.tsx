import { useEffect } from 'react';

interface IProps {}

const AppStatus = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <p>app status</p>
    </section>
  );
};

export default AppStatus;
