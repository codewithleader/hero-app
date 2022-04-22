import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroApp } from './HeroApp';
import './elis.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeroApp />
  </React.StrictMode>
);
