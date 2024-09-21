import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import LoginSignup from "./components/LoginSignup";
import UserLoginSignup from "./components/UserLoginSignup";
import Home from "./components/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserLoginSignup" element={<UserLoginSignup />} />
          <Route path="/LoginSignup" element={<LoginSignup />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
