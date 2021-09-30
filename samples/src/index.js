import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
import 'etc/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

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
