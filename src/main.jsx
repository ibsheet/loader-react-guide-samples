import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './config/config'

// import App from './App.jsx'
import App from './components/App'
import rootReducer from './reducer';

const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </StrictMode>,
)
