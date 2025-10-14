import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import Root from '@page/root/index';
import Dashboard from '@page/dashboard/index';
import Home from '@page/home/index';
import Page404 from '@base/page-404';

interface IProps {}

const AppRouter = (props: IProps) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index={true} element={<Dashboard />} />
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
