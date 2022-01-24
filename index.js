import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as App from './App.js';

ReactDOM.render(
  <React.StrictMode>
    <App.navbar title="REACT" />
    <App.card title="Hunger Report" text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
    {App.pagination()}
  </React.StrictMode>,
  document.getElementById('app')
);
