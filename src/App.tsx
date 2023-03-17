import APP_PATHS from '@constants/appPath/appPath';
import { HashRouter, redirect } from 'react-router-dom';
import Router from './routes/router';

function App() {
  redirect(APP_PATHS.HOME);

  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
