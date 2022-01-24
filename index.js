import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as App from './App.js';

function cards(){
    return App.card();
}
function renderCards(n){
    for(let i=0;i<=n;i++){
      cards();
    }
}

ReactDOM.render(
  <React.StrictMode>
    {App.navbar()}
    {renderCards(5)}
    {App.pagination()}
  </React.StrictMode>,
  document.getElementById('app')
);
