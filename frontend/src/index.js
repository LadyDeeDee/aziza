import React, {createContext} from 'react';
import createRoot from 'react-dom';
import App from './App';
import ProductStore from './store/ProductStore';
import UserStore from './store/UserStore';
import { BrowserRouter} from "react-router-dom"

export const Context = createContext(null)
createRoot.render(
  <BrowserRouter> 
    <Context.Provider value = {{
      user: new UserStore(),
      product: new ProductStore(),
    }}>
      <App />
    </Context.Provider>
  </BrowserRouter> ,
  document.getElementById('root')
);


