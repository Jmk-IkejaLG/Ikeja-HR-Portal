import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => (
  <div className="p-6 text-center">
    <h1 className="text-3xl font-bold mb-4">Welcome to Ikeja LG HR Portal</h1>
    <p className="mb-6">Please log in to manage your profile, submit requests, or view staff data.</p>
    <Link to="/login"><button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button></Link>
  </div>
);

const Login = () => (
  <div className="p-6 max-w-md mx-auto">
    <h2 className="text-xl font-semibold mb-4">Staff Login</h2>
    <input type="text" placeholder="Oracle Number" className="w-full mb-3 p-2 border rounded" />
    <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
    <button className="bg-blue-500 text-white px-4 py-2 w-full rounded">Login</button>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}