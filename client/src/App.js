import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import UserLoginSignup from "./components/UserLoginSignup";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/UserLoginSignup" element={<UserLoginSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
