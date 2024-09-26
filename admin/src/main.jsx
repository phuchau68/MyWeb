import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Đúng cú pháp import cho React 18
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
