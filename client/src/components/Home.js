import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../h.css";
import { useAuth } from "./AuthContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const Home = () => {
  <Toaster position="bottom-center" reverseOrder={false} />;
  const [showSellerDropdown, setShowSellerDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, logout } = useAuth();
  const [showHireForm, setShowHireForm] = useState(false); // State for popup form

  const firstName = user ? user.name.split(" ")[0] : null;
  const handleLogout = () => {
    setTimeout(() => {
      logout();
      navigate("/UserLoginSignup");
    }, 1000);
  };
  const toggleSellerDropdown = () => {
    setShowSellerDropdown(true);
    setShowUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(true);
    setShowSellerDropdown(false);
  };
  const navigate = useNavigate();
  const toggleHireForm = () => {
    setShowHireForm(!showHireForm);
  };

  const handleSubmit = async (e) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/email/mail",
        {
          user: storedUser,
          hireInput: inputValue,
        }
      );
      console.log("Email sent successfully:", response.data);
      toast.success("Email sent successfully!");
      toggleHireForm(); // Close popup on success
    } catch (error) {
      console.error(
        "Error sending email:",
        error.response ? error.response.data : error.message
      );
      toast.error(
        "Error sending email: " +
          (error.response ? error.response.data : error.message)
      );
    } finally {
    }
  };

  return (
    <div>
      <section id="header">
        <Link className="logo">
          <i className="fas fa-store"></i> Vocify
        </Link>
        <div>
          <ul id="navbar">
            <li>
              <Link className="active" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="dropbtn">About</span>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/Course">Courses</Link>
                  <Link to="/Campaign">Campaign</Link>
                  <Link to="/video">Future Creators</Link>
                  <Link to="/About">Know Us</Link>
                  <Link to="/SellerLogin">Join US</Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <span onClick={toggleHireForm} style={{ cursor: "pointer" }}>
                <b>Hire</b>
              </span>
            </li>

            <li>
              <Link to="/Cart">
                <FontAwesomeIcon icon={faShoppingBag} />
              </Link>
            </li>
            <li
              className="user-icon"
              onMouseEnter={toggleUserDropdown}
              onMouseLeave={() => setShowUserDropdown(false)}
            >
              <i className="fas fa-user login-icon"></i>
              {user && <span>Hello, {firstName}!</span>}
              {showUserDropdown && (
                <div className="dropdown-menu">
                  {user ? (
                    <>
                      <Link to="#">Profile</Link>
                      <Link to="#" onClick={handleLogout}>
                        Sign Out
                      </Link>
                    </>
                  ) : (
                    <Link to="/UserLoginSignup">Register/Sign In</Link>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      </section>

      {/* Popup Form for Hire */}
      {showHireForm && (
        <div className="popup-form">
          <div className="form-container">
            {/* <h2>Hire Us</h2> */}
            <form onSubmit={handleSubmit} method="post">
              {/* <label htmlFor="name">Your Name:</label> */}
              {/* <input type="text" id="name" name="name" required /> */}
              {/* <label htmlFor="email">Your Email:</label> */}
              {/* <input type="email" id="email" name="email" required /> */}
              <label htmlFor="message">Hire Message:</label>
              <textarea
                id="message"
                name="message"
                required
                value={inputValue} // Bind the value to state
                placeholder="e.g. I want to hire Alex."
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                onChange={(e) => setInputValue(e.target.value)} // Update state on change
              ></textarea>
              <button type="submit">Submit</button>
              <button type="button" onClick={toggleHireForm}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Offer Section */}
      <div className="offer-container">
        <div className="text-content">
          <p>Trade-in-offer</p>
          <h1>Super value deals</h1>
          <h2>On all products</h2>
          <p>Save more with coupons & up to 70% off!</p>
          <button>Shop Now</button>
        </div>
        <div className="image-content">
          <img src="/img/bggp.jpg" alt="We are Equal" />
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="feature-cards">
        {[
          { src: "/img/1.webp", title: "Free Shipping" },
          { src: "/img/2.jpg", title: "Online Order" },
          { src: "/img/3.png", title: "Save Money" },
          { src: "/img/4.png", title: "Promotions" },
          { src: "/img/5.jpg", title: "Happy Sell" },
          { src: "/img/6.jpg", title: "24/7 Support" },
        ].map((card, index) => (
          <div className="card" key={index}>
            <img src={card.src} alt={card.title} />
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#171b19",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              {card.title}
            </p>
          </div>
        ))}
      </div>

      {/* Featured Products Section */}
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Echoes of Inspiration</p>
        <div className="pro-container">
          {[
            {
              src: "/img/rangoli.jpeg",
              title: "Rangoli Design",
              price: "Rs 78",
            },
            { src: "/img/p12.jpeg", title: "Shawl", price: "Rs 200" },
            { src: "/img/p15.jpeg", title: "Handmade Bags", price: "Rs 30" },
            { src: "/img/p7.jpeg", title: "Scented Candle", price: "Rs 90" },
            { src: "/img/p10.jpeg", title: "Mop", price: "Rs 20" },
            { src: "/img/p11.jpeg", title: "Duster", price: "Rs 15" },
            { src: "/img/p8.jpeg", title: "Jewellery Box", price: "Rs 200" },
            { src: "/img/p13.jpeg", title: "Turmeric", price: "Rs 120" },
          ].map((product, index) => (
            <div className="pro" key={index}>
              <img src={product.src} alt={product.title} />
              <div className="des">
                <h5>{product.title}</h5>
                <div className="star">
                  {[...Array(5)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <h4>{product.price}</h4>
              </div>
              <Link to="/" className="cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <section id="banner" className="section-m1">
        <h4>Exclusive Vocify Offers</h4>
        <h2>
          Upto <span>70% off</span> All products
        </h2>
        <button className="normal">Explore More</button>
      </section>

      {/* New Arrivals Section */}
      <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <div className="pro-container">
          {[
            { src: "/img/f11.jpg", title: "T shirts", price: "Rs 200" },
            { src: "/img/c22.jpg", title: "Diy Kits", price: "Rs 70" },
            { src: "/img/p5.jpeg", title: "Diyas", price: "Rs 50" },
            { src: "/img/c7.jpg", title: "Cups", price: "Rs 100" },
            { src: "/img/C100.jpg", title: "Pottery Making", price: "Rs 80" },
            { src: "/img/s.jpeg", title: "Scarf", price: "Rs 50" },
            { src: "/img/slip.jpg", title: "Bamboo Slipper", price: "Rs 100" },
            { src: "/img/pur.jpg", title: "Ladies Purse", price: "Rs 70" },
          ].map((product, index) => (
            <div className="pro" key={index}>
              <img src={product.src} alt={product.title} />
              <div className="des">
                <h5>{product.title}</h5>
                <div className="star">
                  {[...Array(5)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <h4>{product.price}</h4>
              </div>
              <Link to="/" className="cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Banner 3 Section */}
      <section id="banner3">
        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>FESTIVE PRODUCTS</h2>
          <h3 style={{ color: "white" }}> Diwali Dhamaka - 50% OFF</h3>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
      <footer className="section-p1">
        <div className="col">
          {/* <img src="/img/logo.png" alt="Vocify Logo" /> */}
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong> 562 Wellington Road, Street 32, India
          </p>
          <p>
            <strong>Phone:</strong> +78098643245 / +8976543654
          </p>
          <p>
            <strong>Hours:</strong> 10:00-10:00, Mon-Sat
          </p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaPinterestP />
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src="/img/app.jpg" alt="App Store" />
            <img src="/img/play.jpg" alt="Google Play" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="/img/pay.png" alt="Payment Gateways" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
