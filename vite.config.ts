/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { ghPages } from 'vite-plugin-gh-pages';
import EnvironmentPlugin from 'vite-plugin-environment';
import * as path from 'path';
import BASE_URL from './src/constants/baseUrl';

export enum AliasPath {
  ROUTES = 'routes',
  CONSTANTS = 'constants',
  ASSETS = 'assets',
  PAGES = 'pages',
  COMPONENTS = 'components',
  STORE = 'store',
  HOOKS = 'hooks',
  DATA = 'data',
  SERVICES = 'services',
}

interface IAliasPathResolver {
  find: string;
  replacement: string;
}

const aliasPathResolvers: Array<IAliasPathResolver> = Object.values(AliasPath).map(
  (aliasFolder: string) => ({
    find: `@${aliasFolder}`,
    replacement: path.resolve(__dirname, `src/${aliasFolder}`),
  })
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ghPages(), EnvironmentPlugin('all')],
  base: BASE_URL,
  resolve: {
    alias: aliasPathResolvers,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTest.ts'],
  },
});
