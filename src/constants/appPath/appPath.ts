const baseUrl = process.env.BASE_URL;

const HOME_PATH = `${baseUrl}`;
const ABOUT_PATH = `${baseUrl}about`;
const CREATE_CARDS_PATH = `${baseUrl}create-cards`;
const NOT_FOUND_PATH = '*';
const BASE_PATH = '/';

const APP_PATHS = {
  BASE: BASE_PATH,
  HOME: HOME_PATH,
  ABOUT: ABOUT_PATH,
  NOT_FOUND: NOT_FOUND_PATH,
  CREATE_CARDS: CREATE_CARDS_PATH,
} as const;

export default APP_PATHS;
