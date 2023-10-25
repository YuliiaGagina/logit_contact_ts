import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { Global } from '@emotion/react';
import { GlobalStyles } from './styles/GlobalStyles';

import './index.css';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import { store } from './redux/store';
import { App } from './components/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <React.StrictMode>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
<BrowserRouter >
          <App />
        </BrowserRouter >
 
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// BrowserRouter basename = '/work_with_login_ts/';