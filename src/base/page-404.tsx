import { useEffect } from 'react';
import { useNavigate } from 'react-router';

interface IProps {}

const Page404 = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    navi('/');

    return () => {};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>Page Not Found!</section>
  );
};

export default Page404;
