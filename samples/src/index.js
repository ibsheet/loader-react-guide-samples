/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import LoaderConfig from 'etc/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

LoaderConfig();
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
