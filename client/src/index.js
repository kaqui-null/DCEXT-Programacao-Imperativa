import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Login from './login'
import HistoricoGeral from './pages/HistoricoGeral';
import Login from './pages/login';
import PaginaDetalhamento from './pages/pagina-detalhamento'
import reportWebVitals from './reportWebVitals';
import PaginaMedico from './PaginaMedico';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < HistoricoGeral />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
