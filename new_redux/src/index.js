import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import StoreComponent from './STATE/STORE/Store.js';

import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './components/ErrorBoundary.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <ErrorBoundary fallbackRender={({ error }) => (
            <div>
              <h1>Something went wrong!</h1>
              <p>Error: {error.message}</p>
            </div>
          )}>
          <Provider store={StoreComponent}>
            <App />
          </Provider>
      </ErrorBoundary>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
