import { Fragment } from 'react'
import Global from "./styles/Global";
import RouterApp from './routes';

import { AppContextProvider } from './context/AppContext';

function App() {
  return (
      <Fragment>
        <AppContextProvider>
        <RouterApp />
        </AppContextProvider>
        <Global />
      </Fragment>
  );
}

export default App
