
// pages/Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/login");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to Dashboard</h2>
      <p className="text-gray-600 mb-4">You are logged in!</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;