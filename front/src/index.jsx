import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';

// https://animate.style/
import 'animate.css';

// css
import './static/css/tailwind.css';
import './static/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);


/*
pnpm i react-loader-spinner react-router-dom react-spinners sweetalert2 sweetalert2-react-content axios animate.css
pnpm i -D gh-pages
*/