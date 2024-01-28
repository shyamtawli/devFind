import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Analytics />
    <App />
  </React.StrictMode>,
);
