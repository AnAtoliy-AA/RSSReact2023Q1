import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '@pages/notFoundPage/notFoundPage';
import MainPage from '@pages/mainPage/mainPage';
import AboutUsPage from '@pages/aboutUsPage/aboutUsPage';
import APP_PATHS from '@constants/appPath/appPath';
import Layout from '@components/layout/layout';
import CreateCardPage from '@pages/createCardPage/createCardPage';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path={APP_PATHS.BASE} element={<Layout />}>
        <Route index element={<NotFoundPage />} />
        <Route path={APP_PATHS.HOME} element={<MainPage />} />
        <Route path={APP_PATHS.ABOUT} element={<AboutUsPage />} />
        <Route path={APP_PATHS.CREATE_CARDS} element={<CreateCardPage />} />
        <Route path={APP_PATHS.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
