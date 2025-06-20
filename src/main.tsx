import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AdminPanel from './sections/AdminPanel/AdminPanel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
