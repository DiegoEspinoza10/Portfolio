import './App.css';
import React from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, BrowserRouter,Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Diego Espinoza portfolio</title>
        <meta name="description" content="Diego Espinoza portfolio" />
        <meta name="keywords" content="Diego Espinoza portfolio" />
      </Helmet>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
