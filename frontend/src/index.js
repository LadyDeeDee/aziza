import React, {createContext} from 'react';
import createRoot from 'react-dom';
import App from './App';
import ProductStore from './store/ProductStore';
import UserStore from './store/UserStore';


export const Context = createContext(null)
createRoot.render(
  <Context.Provider value = {{
    user: new UserStore(),
    product: new ProductStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


