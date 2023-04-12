import React from 'react';
import ReactDOM from 'react-dom/client';
import './index/index.css';
import RouteSwitch from "./index/RouteSwitch";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
