import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS styling
import './index.css';
import './w3.css';

import reportWebVitals from './reportWebVitals';
import Dashboard from '../src/Dashboard/dashboard';
import Nav from '../src/Navigation/navigation';
import Profile from '../src/Profile/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Profile />
    <Dashboard />
  </React.StrictMode>
);

reportWebVitals();
