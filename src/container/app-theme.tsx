import { useEffect } from 'react';

interface IProps {}

const AppTheme = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <p>app theme</p>
    </section>
  );
};

export default AppTheme;
