import { HashRouter } from 'react-router-dom';
import Router from './routes/router';

function App() {
  return <Router />;
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
