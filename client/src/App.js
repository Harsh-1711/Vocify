import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.js";
import About from "./components/abt.js";
import Shop from "./components/shop.js";
import Product from "./components/product.js";
import Contact from "./components/contact.js";
import Course from "./components/Course.js";
import Campaign from "./components/Campaign.js";
import Cart from "./components/cart.js";
import Home from "./components/Home.js";
import UserLoginSignup from "./components/UserLoginSignup.js";
import SellerLogin from "./components/LoginSignup.js";
import Video from "./components/video.js";
import { AuthProvider } from "./components/AuthContext.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Video " element={<Video />} />
          <Route path="/" element={<Home />} />
          <Route path="/UserLoginSignup" element={<UserLoginSignup />} />
          <Route path="/LoginSignup" element={<LoginSignup />} /> */}
          <Route path="/SellerLogin" element={<SellerLogin />} />
          <Route path="/UserLoginSignup" element={<UserLoginSignup />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Campaign" element={<Campaign />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
