import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faShoppingBag,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../home.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Cart = () => {
  const [showSellerDropdown, setShowSellerDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  // Recalculate total whenever cartItems change
  useEffect(() => {
    const newTotal = calculateTotal();
    setTotal(newTotal);
  }, [cartItems]);

  // Handle removing an item from the cart
  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleProceedToCheckout = () => {
    setShowPayment(true);
  };
  const toggleSellerDropdown = () => {
    setShowSellerDropdown(true);
    setShowUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(true);
    setShowSellerDropdown(false);
  };
  // Calculate total amount
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
        return total + (price || 0);
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      <section id="header">
        <a href="#" className="logo">
          <FontAwesomeIcon icon={faStore} /> Vocify
        </a>
        <div>
          <ul id="navbar">
            <li>
              <Link to="/">Home</Link>
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
                  <Link to="/About">Know Us</Link>
                  <Link to="/Course">Courses</Link>
                  <Link to="/Campaign">Campaign</Link>
                  <Link to="/Campaign">Future Creators</Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Cart">
                <FontAwesomeIcon icon={faShoppingBag} />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="cart-page" className="section-p1">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(index)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} /> Remove
                </button>
              </div>
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="total-amount">
            <h3>Total Amount: Rs {total}</h3>
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="checkout-btn-container">
            <button className="checkout-btn" onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </section>

      {showPayment && (
        <section id="payment-section" className="section-p1">
          <h3>Payment Information</h3>
          <form className="payment-form">
            <div className="form-group">
              <label htmlFor="address">Delivery Address:</label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <button type="submit" className="payment-btn">
              Cash on Delivery
            </button>
          </form>
        </section>
      )}
    </div>
  );
  <footer className="section-p1">
    <div className="col">
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
  </footer>;
};

export default Cart;
