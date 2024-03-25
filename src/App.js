import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import create from "./pages/Create"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<create />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
