import './App.css';
import React from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Diego Espinoza Portfolio</title>
        <meta name="description" content="Diego Espinoza Portfolio" />
        <meta name="keywords" content="Diego Espinoza Portfolio" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

