import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Homepage from './landing_page/home/Homepage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login"; 
import Aboutpage from "./landing_page/about/Aboutpage";
import Productpage from './landing_page/products/Productpage';
import Pricingpage from './landing_page/pricing/Pricingpage';
import Supportpage from './landing_page/support/Supportpage';
import Pagenotfound from './landing_page/Pagenotfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/product' element={<Productpage/>}/>
        <Route path='/pricing' element={<Pricingpage/>}/>
        <Route path='/support' element={<Supportpage/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
