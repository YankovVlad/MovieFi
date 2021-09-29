import * as React from 'react';

import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './index.css';

import  { reducer } from './reducers/reducer';
import { Navigation } from './components/Navigation/Navigation'
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <Navigation />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

