import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contacto from './pages/Contacto';
import Dicas from './pages/Dicas';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dicas" element={<Dicas />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;