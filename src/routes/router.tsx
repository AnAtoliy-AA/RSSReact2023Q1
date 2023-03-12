import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '@pages/notFoundPage/notFoundPage';
import BASE_URL from '@constants/baseUrl';
import MainPage from '@pages/mainPage/mainPage';
import AboutUsPage from '@pages/aboutUsPage/aboutUsPage';

const baseUrl = process.env.BASE_URL ?? BASE_URL;

export enum AppPath {
  HOME = '',
  NOT_FOUND_PATH = '*',
}

export const HOME_PATH = baseUrl;
export const LETTERS_PATH = `${baseUrl}about`;
export const NOT_FOUND_PATH = '*';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<MainPage />} />
      <Route path={LETTERS_PATH} element={<AboutUsPage />} />
      <Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
