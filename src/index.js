import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Titel from './Titel';
import reportWebVitals from './reportWebVitals';
import TierCard from './TierCard';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Titel />
    <TierCard name="Ally" art="Hund" krankheit="Arthritis - Hüfte" />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
