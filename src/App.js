import './App.css';
import Login from './components/layout/Login'; 
import NavBar from './components/layout/navBar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/layout/Register'; 
import ForgotPassword from './components/layout/forgot-password';
import Dashboard from './components/layout/Dashboard';
import Invoices from './components/layout/Invoices';

function App() {
  return (
    <Router>
       <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;