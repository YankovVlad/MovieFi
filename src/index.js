import * as React from 'react';
import { StyledEngineProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core';

import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './index.css';

import  { reducer } from './reducers/reducer';
import { Navigation } from './Router/Navigation'
import { Provider } from 'react-redux';


export default function GlobalCssPriority() {
  return (
    <StyledEngineProvider injectFirst>


     </StyledEngineProvider>
  )
}

ReactDOM.render(



  <React.StrictMode>
    <StyledEngineProvider>
    <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <Navigation />
    </Provider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

