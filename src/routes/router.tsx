import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '@pages/notFoundPage/notFoundPage';
import MainPage from '@pages/mainPage/mainPage';
import AboutUsPage from '@pages/aboutUsPage/aboutUsPage';
import APP_PATHS from '@constants/appPath/appPath';
import Layout from '@components/layout/layout';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path={APP_PATHS.BASE} element={<Layout />}>
        <Route path={APP_PATHS.HOME} element={<MainPage />} />
        <Route path={APP_PATHS.ABOUT} element={<AboutUsPage />} />
        <Route path={APP_PATHS.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
