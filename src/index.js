import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS styling
import './index.css';
import './w3.css';

import reportWebVitals from './reportWebVitals';
import Dashboard from '../src/Dashboard/dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);

reportWebVitals();
