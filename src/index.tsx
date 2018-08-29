import 'bootstrap';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const rootEl = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <BrowserRouter>
        <NextApp />
      </BrowserRouter>,
      rootEl
    );
  });
}
