import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalContextProvider } from './contexts/GlobalContext'
import Splash from './components/Splash/index';

ReactDOM.render(
    <GlobalContextProvider>
      <Splash />
    </GlobalContextProvider>,
  document.getElementById('root')
);
