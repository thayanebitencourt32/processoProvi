import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalContextProvider } from './contexts/GlobalContext'

ReactDOM.render(
    <GlobalContextProvider>
    </GlobalContextProvider>,
  document.getElementById('root')
);
