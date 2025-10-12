import { useEffect } from 'react';

interface IProps {}

const AppRoot = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <p>app root</p>
    </section>
  );
};

export default AppRoot;
