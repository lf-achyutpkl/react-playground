import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Routes from './routes';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}> 
    {Routes}
  </Provider>,
  document.getElementById('root'));
