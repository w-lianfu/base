import { useEffect } from 'react';

interface IProps {}

const Home = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <p>~~~ Home Page ~~~</p>
      <p>~~~ Home Page ~~~</p>
      <p>~~~ Home Page ~~~</p>
    </section>
  );
};

export default Home;
