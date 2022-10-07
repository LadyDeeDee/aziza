import './style.css';
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {ProductPage} from "./pages/ProductPage"
import {OrderPage} from "./pages/OrderPage"
import {OrderDetailsPage} from "./pages/OrderDetailsPage"
import {ContactForm} from "./pages/ContactForm"
import {Catalog} from "./pages/Catalog"
import {Admin} from "./pages/Admin"
import {Auth} from "./pages/Auth"

const App = () => {
  return (
   <BrowserRouter> 
        <NavBar />
        <AppRouter />
        <Routes>
    <Route path="/" element={<ProductPage/>} />} />
   </Routes>
   </BrowserRouter>
   
  );
};

export default App;
