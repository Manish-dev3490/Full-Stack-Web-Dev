import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthPage from './components/AuthPage';
import './index.css'; // Tailwind import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPage />
  </React.StrictMode>
);