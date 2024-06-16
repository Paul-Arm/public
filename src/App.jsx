import "./App.css";
import TopBar from "./components/TopBar.jsx";
import Home from "./pages/Home/home.jsx";
import About from "./pages/About/index.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";


function App() {
  return (
    <Router>
      <div className="App">

          <TopBar></TopBar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Home />} />
          </Routes>

      </div>
    </Router>
  );
}

export default App;
