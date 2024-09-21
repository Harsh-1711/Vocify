import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../home.css";
import { useAuth } from "./AuthContext";

const Home = () => {
  const [showSellerDropdown, setShowSellerDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const { user, logout } = useAuth();

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

  return (
    <div>
      {" "}
      <section id="header">
        {" "}
        <Link className="logo">
          {" "}
          <i className="fas fa-store"></i> Vocify{" "}
        </Link>{" "}
        <div>
          <ul id="navbar">
            <li>
              <Link className="active" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/abt">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <div
                className="dropdown"
                onMouseEnter={toggleSellerDropdown}
                onMouseLeave={() => setShowSellerDropdown(false)}
              >
                <Link>Seller</Link>
                {showSellerDropdown && (
                  <div className="dropdown-menu">
                    <Link to="/UserLoginSignup">Sign In/ Register</Link>
                  </div>
                )}
              </div>
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
                    <Link to="/UserLoginSignup">Sign In/Register</Link>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>{" "}
      </section>{" "}
      <div className="offer-container">
        {" "}
        <div className="text-content">
          {" "}
          <p>Trade-in-offer</p> <h1>Super value deals</h1>{" "}
          <h2>On all products</h2>{" "}
          <p>Save more with coupons & up to 70% off !</p>{" "}
          <button>Shop Now</button>{" "}
        </div>{" "}
        <div className="image-content">
          {" "}
          <img src="/img/bggp.jpg" alt="We are Equal" />{" "}
        </div>{" "}
      </div>{" "}
      {/* Feature Cards Section */}
      <div className="feature-cards">
        {" "}
        {[
          {
            src: "/img/1.webp",
            title: "Free Shipping",
          },

          {
            src: "/img/2.jpg",
            title: "Online Order",
          },

          {
            src: "/img/3.png",
            title: "Save Money",
          },

          {
            src: "/img/4.png",
            title: "Promotions",
          },

          {
            src: "/img/5.jpg",
            title: "Happy Sell",
          },

          {
            src: "/img/6.jpg",
            title: "24/7 Support",
          },
        ].map((card, index) => (
          <div className="card" key={index}>
            {" "}
            <img src={card.src} alt={card.title} />{" "}
            <p
              style={{
                fontSize: "1rem", // Title font size
                fontWeight: "bold", // Makes the title bold
                color: "#171b19", // Text color
                margin: 0, // Removes default margin
                fontStyle: "italic", // Makes the text italic
              }}
            >
              {" "}
              {card.title}
            </p>{" "}
          </div>
        ))}
      </div>{" "}
      {/* Featured Products Section */}
      <section id="product1" className="section-p1">
        {" "}
        <h2>Featured Products</h2> <p>Echoes of Inspiration</p>{" "}
        <div className="pro-container">
          {" "}
          {[
            {
              src: "/img/rangoli.jpeg",
              title: "Rangoli Design",
              price: "Rs 78",
            },

            {
              src: "/img/p12.jpeg",
              title: "Shawl",
              price: "Rs 200",
            },

            {
              src: "/img/p15.jpeg",
              title: "Handmade Bags",
              price: "Rs 30",
            },

            {
              src: "/img/p7.jpeg",
              title: "Scented Candle",
              price: "Rs 90",
            },

            {
              src: "/img/p10.jpeg",
              title: "Mop",
              price: "Rs 20",
            },

            {
              src: "/img/p11.jpeg",
              title: "Duster",
              price: "Rs 15",
            },

            {
              src: "/img/p8.jpeg",
              title: "Jewellery Box",
              price: "Rs 200",
            },

            {
              src: "/img/p13.jpeg",
              title: "Turmeric",
              price: "Rs 120",
            },
          ].map((product, index) => (
            <div className="pro" key={index}>
              {" "}
              <img src={product.src} alt={product.title} />{" "}
              <div className="des">
                {" "}
                <h5> {product.title}</h5>{" "}
                <div className="star">
                  {" "}
                  {[...Array(5)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>{" "}
                <h4> {product.price}</h4>{" "}
              </div>{" "}
              <Link to="/" className="cart">
                {" "}
                <i className="fas fa-shopping-cart"></i>{" "}
              </Link>{" "}
            </div>
          ))}
        </div>{" "}
      </section>{" "}
      {/* Banner Section */}
      <section id="banner" className="section-m1">
        {" "}
        <h4>Exclusive Vocify Offers</h4>{" "}
        <h2>
          {" "}
          Upto <span>70% off</span> All products{" "}
        </h2>{" "}
        <button className="normal">Explore More</button>{" "}
      </section>{" "}
      {/* New Arrivals Section */}
      <section id="product1" className="section-p1">
        {" "}
        <h2>New Arrivals</h2>{" "}
        <div className="pro-container">
          {" "}
          {[
            {
              src: "/img/f11.jpg",
              title: "T shirts",
              price: "Rs 200",
            },

            {
              src: "/img/c22.jpg",
              title: "Diy Kits",
              price: "Rs 70",
            },

            {
              src: "/img/p5.jpeg",
              title: "Diyas",
              price: "Rs 50",
            },

            {
              src: "/img/c7.jpg",
              title: "Cups",
              price: "Rs 100",
            },

            {
              src: "/img/C100.jpg",
              title: "Pottery Making",
              price: "Rs 80",
            },

            {
              src: "/img/s.jpeg",
              title: "Scarf",
              price: "Rs 50",
            },

            {
              src: "/img/slip.jpg",
              title: "Bamboo Slipper",
              price: "Rs 100",
            },

            {
              src: "/img/pur.jpg",
              title: "Ladies Purse",
              price: "Rs 70",
            },
          ].map((product, index) => (
            <div className="pro" key={index}>
              {" "}
              <img src={product.src} alt={product.title} />{" "}
              <div className="des">
                {" "}
                <h5> {product.title}</h5>{" "}
                <div className="star">
                  {" "}
                  {[...Array(5)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>{" "}
                <h4> {product.price}</h4>{" "}
              </div>{" "}
              <Link to="/" className="cart">
                {" "}
                <i className="fas fa-shopping-cart"></i>{" "}
              </Link>{" "}
            </div>
          ))}
        </div>{" "}
      </section>{" "}
      {/* Banner 3 Section */}
      <section id="banner3">
        {" "}
        <div className="banner-box">
          {" "}
          <h2>SEASONAL SALE</h2> <h3>Winter Collection</h3>{" "}
        </div>{" "}
        <div className="banner-box banner-box2">
          {" "}
          <h2>FESTIVE PRODUCTS</h2>{" "}
          <h3 style={{ color: "white" }}> Diwali Dhamaka - 50% OFF</h3>{" "}
        </div>{" "}
      </section>{" "}
      {/* Newsletter Section */}
      <section id="newsletter" className="section-p1 section-m1">
        {" "}
        <div className="newstext">
          {" "}
          <h4>Sign Up For Newsletter</h4>{" "}
          <p>
            {" "}
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>{" "}
          </p>{" "}
        </div>{" "}
        <div className="form">
          {" "}
          <input type="text" placeholder="Your email address" />{" "}
          <button>Sign Up</button>{" "}
        </div>{" "}
      </section>{" "}
      {/* Footer Section */}
      <footer className="section-p1">
        {" "}
        <div className="col">
          {" "}
          <img src="/img/logo.png" alt="" /> <h4>Contact</h4>{" "}
          <p>
            {" "}
            <strong>Address: </strong> 562 Wellington Road, Street 32, India{" "}
          </p>{" "}
          <p>
            {" "}
            <strong>Phone:</strong> +78098643245 / +8976543654{" "}
          </p>{" "}
          <p>
            {" "}
            <strong>Hours:</strong> 10:00-10:00, Mon-Sat{" "}
          </p>{" "}
          <div className="follow">
            {" "}
            <h4>Follow Us</h4>{" "}
            <div className="icon">
              {" "}
              <i className="fab fa-facebook-f"></i>{" "}
              <i className="fab fa-twitter"></i>{" "}
              <i className="fab fa-instagram"></i>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="col">
          <h4>About</h4>
          <Link to="/">About Us</Link>
          <Link to="/">Delivery Information</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Contact Us</Link>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <Link to="/">Sign In</Link>
          <Link to="/">View Cart</Link>
          <Link to="/">My Wishlist</Link>
          <Link to="/">Track My Order</Link>
          <Link to="/">Help</Link>
        </div>{" "}
        <div className="col install">
          {" "}
          <h4>Install App</h4> <p>From App Store or Google Play</p>{" "}
          <div className="row">
            {" "}
            <img src="/img/app.jpg" alt="" /> <img src="/img/play.jpg" alt="" />{" "}
          </div>{" "}
          <p>Secured Payment Gateways</p> <img src="/img/pay.png" alt="" />{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
};

export default Home;
