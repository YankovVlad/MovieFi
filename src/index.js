import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import  { reducer } from './reducers/reducer';
import './index.css';

import { Navigation } from './Router/Navigation'
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducer)}>
      <Navigation />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

