import React from 'react';
import logo from './logo.svg';

import Header from "./Components/Header";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import AboutUs from "./Pages/AboutUs";
import Game from "./Pages/Game";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import path from 'path';
// import './App.css';

function App() {
  return (
    <div className="vh-100">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} >
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
