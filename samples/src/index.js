import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';
import IBSheetLoader from '@ibsheet/loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// 로더 config
IBSheetLoader.config({
  registry: [
    {
      name: 'ibsheet',
      baseUrl: 'https://demo.ibleaders.com/ibsheet/v8/samples/customer-sample/assets/ibsheet/', // ibsheet 라이브러리 위치, '<publicpath>/ibsheet'
      // baseUrl: './lib/assets', // ibsheet 라이브러리 위치, '<publicpath>/ibsheet'
      locales: ['en','ko'],
      theme: "default",
      plugins: [
        'dialog',
        'common',
        'excel',
      ]
    }
  ]
});

// 라이브러리를 로드되었을 때 발생.
IBSheetLoader.once('loaded', (evt) => {
  console.log('loaded', evt);
});

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
