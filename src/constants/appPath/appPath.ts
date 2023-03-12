import BASE_URL from '@constants/baseUrl';

const baseUrl = process.env.BASE_URL ?? BASE_URL;

const HOME_PATH = baseUrl;
const ABOUT_PATH = `${baseUrl}about`;
const NOT_FOUND_PATH = '*';

const APP_PATHS = {
  HOME: HOME_PATH,
  ABOUT: ABOUT_PATH,
  NOT_FOUND: NOT_FOUND_PATH,
} as const;

export default APP_PATHS;
