import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/Navbar'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();