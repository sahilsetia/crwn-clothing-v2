import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './contexts/user-context-component';
import ProductContext from './contexts/product-context-component';
import CartContext from './contexts/cart-context-component';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext >
        <ProductContext>
          <CartContext>
          <App /> 
          </CartContext>
        </ProductContext>
      </UserContext>
    </BrowserRouter>
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
