import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Création du root pour le rendu de React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application React
root.render(
  <React.StrictMode>
    <App /> {/* Ton App.js gère déjà ShopContextProvider et HashRouter */}
  </React.StrictMode>
);

// Mesure des performances
reportWebVitals();
