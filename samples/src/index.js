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
        baseUrl: './lib/assets', // ibsheet 라이브러리 위치
        locales: ["en","ko"],
        plugins: [
          "dialog",
          "common",
          "excel",
        ]
      }
  ]
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
