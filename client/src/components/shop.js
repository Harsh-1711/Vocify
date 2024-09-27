// import React from 'react';
// import React, { useState } from 'react';
import React, { useState } from "react";

// Your component code

import { Link } from "react-router-dom";
import "../home.css"; // Importing external CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faStore,
  faShoppingBag,
  faShoppingCart,
  faStar,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Shop = () => {
  const [showSellerDropdown, setShowSellerDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // Function to handle product redirection
  const handleProduct = () => {
    navigate("/product");
  };

  const toggleSellerDropdown = () => {
    setShowSellerDropdown(true);
    setShowUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(true);
    setShowSellerDropdown(false);
  };
  // Updated handleAddToCart function to store products in localStorage
  const handleAddToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    storedCart.push(product);
    localStorage.setItem("cartItems", JSON.stringify(storedCart));
    alert(`${product.name} has been added to your cart!`);
  };

  const products = [
    { imgSrc: "img/handmadebag.webp", name: "Door Mat", price: "Rs 120" },
    { imgSrc: "img/p10.jpeg", name: "Mop", price: "Rs 25" },
    { imgSrc: "img/p11.jpeg", name: "Duster", price: "Rs 20" },
    { imgSrc: "img/p8.jpeg", name: "Jewellery", price: "Rs 200" },
    { imgSrc: "img/p13.jpeg", name: "Turmeric Powder", price: "Rs 100" },
    { imgSrc: "img/f11.jpg", name: "T-shirt", price: "Rs 300" },
    { imgSrc: "img/c22.jpg", name: "DIY Kits", price: "Rs 78" },
    { imgSrc: "img/p5.jpeg", name: "Diyas", price: "Rs 15" },
    { imgSrc: "img/c7.jpg", name: "Cups", price: "Rs 100" },
    { imgSrc: "img/s.jpeg", name: "Shawl", price: "Rs 250" },
    { imgSrc: "img/slip.jpg", name: "Sleepers", price: "Rs 150" },
    { imgSrc: "img/pur.jpg", name: "Hand Bag", price: "Rs 170" },
  ];

  return (
    <div>
      {/* Header Section */}
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
            {/* <li><Link to="/Cart">Cart</Link></li> */}
            {/* <li><a href="seller.html">Become a seller</a></li> */}
            <li>
              <Link to="/Cart">
                <FontAwesomeIcon icon={faShoppingBag} />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Page Header */}
      <section id="page-header">
        <h2>#Stay Home</h2>
        {/* <p>Save more with coupons & up to 70% off!</p> */}
      </section>

      {/* Product Section */}
      <section id="product1" className="section-p1">
        <div className="pro-container" onClick={handleProduct}>
          {products.map((product, index) => (
            <div className="pro" key={index}>
              <img src={product.imgSrc} alt={product.name} />
              <div className="des">
                <h5>{product.name}</h5>
                <div className="star">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>
                <h4>{product.price}</h4>
              </div>
              {/* Add to cart button with localStorage functionality */}
              <a
                href="#"
                className="cart"
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation
                  handleAddToCart(product); // Pass the product object to handleAddToCart
                }}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </a>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletter</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button>Sign Up</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="section-p1">
        <div className="col">
          <img src="logo.png" alt="Logo" />
          <h4>Contact</h4>
          <p>
            <strong>Address: </strong>562 Wellington Road, Street 32, India
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
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faPinterestP} />
              <FontAwesomeIcon icon={faYoutube} />
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
            <img src="img/app.jpg" alt="App Store" />
            <img src="img/play.jpg" alt="Google Play" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="img/pay.png" alt="Payment" />
        </div>
      </footer>
    </div>
  );
};

export default Shop;
