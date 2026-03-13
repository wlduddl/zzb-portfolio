import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/reset.css';
import { BrowserRouter } from 'react-router-dom';
import Scroll from './components/Scroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Scroll />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

