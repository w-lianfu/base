import { useEffect } from 'react';

interface IProps {}

const AppTop = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <p>app-top</p>
    </section>
  );
};

export default AppTop;
