import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const products = [
  {
    name: "Cappucino",
    price: 35000,
    active: true,
  },
  {
    name: "Green Tea Latte",
    price: 40000,
    active: true
  },
  {
    name: "Fish and Chips",
    price: 50000,
    active: true,
  },
  {
    name: "Tuna Sandwich",
    price: 45000,
    active: true,
  },
  {
    name: "Mineral Water",
    price: 8000,
    active: false,
  },
  {
    name: "Frence Fries",
    price: 18000,
    active: false,
  },
];
ReactDOM.render(
  <App products={products} />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
