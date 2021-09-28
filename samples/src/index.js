import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';
import IBSheetLoader from '@ibsheet/loader';

// 로더 config
IBSheetLoader.config({
  registry: [
    {
      name: 'ibsheet',
      baseUrl: 'https://demo.ibleaders.com/ibsheet/v8/samples/customer-sample/assets/ibsheet/', // ibsheet 라이브러리 위치, '<publicpath>/ibsheet'
      // baseUrl: './lib/assets', // ibsheet 라이브러리 위치, '<publicpath>/ibsheet'
      locales: ['en','ko'],
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
