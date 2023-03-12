import Header from '@components/header/header';
import { HashRouter } from 'react-router-dom';
import Router from './routes/router';

function App() {
  return (
    <HashRouter>
      <Header />
      <Router />
    </HashRouter>
  );
}

export default App;
