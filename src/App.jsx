import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Login from "./login";
import Register from "./register";
import Dashboard from "./dashboard";

const App = () => {
  return (
    <Router>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <nav className="fixed top-0 left-0 w-full bg-blue-500 p-4 text-white flex justify-center space-x-4">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


