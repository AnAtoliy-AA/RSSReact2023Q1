import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { NotFoundPage } from '@pages/notFoundPage.tsx/notFoundPage';
import BASE_URL from '@constants/baseUrl';

const baseUrl = process.env.BASE_URL ?? BASE_URL;

export enum AppPath {
  HOME = '',
  NOT_FOUND_PATH = '*',
}

export const HOME_PATH = baseUrl;
export const LETTERS_PATH = `${baseUrl}letters`;
export const NOT_FOUND_PATH = '*';

function Router(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path={HOME_PATH} element={<>H</>} />
        <Route path={LETTERS_PATH} element={<>L</>} />
        <Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
