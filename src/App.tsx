import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '@store/store';
import Router from './routes/router';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Router />
      </HashRouter>
    </Provider>
  );
}

export default App;
