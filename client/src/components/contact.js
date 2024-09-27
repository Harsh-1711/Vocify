import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../h.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [showSellerDropdown, setShowSellerDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleSellerDropdown = () => {
    setShowSellerDropdown(true);
    setShowUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(true);
    setShowSellerDropdown(false);
  };
  return (
    <>
      <section id="header">
        <a href="#" className="logo">
          <i className="fas fa-fas fa-store"></i>Vocify
        </a>
        <nav>
          <ul id="navbar">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/Shop">Shop</Link>
            </li>
            {/* <li><Link to="/About"></Link></li> */}
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
              {" "}
              <Link to="/Contact">Contact</Link>
            </li>
            {/* <li><a href="sellerhome.html">Become a seller</a></li> */}
            <li>
              <Link to="/Cart">
                <FontAwesomeIcon icon={faShoppingBag} />
              </Link>
            </li>
            {/* <li><a href="cart.html"><i className="fas fa-shopping-bag"></i></a></li> */}
          </ul>
        </nav>
      </section>

      <section id="page-header" className="about-header">
        <h2>#let's talk</h2>
        {/* <p>LEAVE A MESSAGE, We love to hear from you!</p> */}
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH :)</span>
          <h2>Visit one of our agency locations or contact us today!!</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="far fa-map"></i>
              <p>56 Glassford Street Glasgow G1 1UL New York</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>Contact@vocify.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>Contact@90865468</p>
            </li>
            <li>
              <i className="far fa-clock"></i>
              <p>Monday to Saturday: 9.00am to 16.pm</p>
            </li>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0884240901028!2d77.20960369988488!3d28.622651543308486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4b2b747e73%3A0x8d83e1b7f4c99c7a!2sPatel%20Chowk!5e0!3m2!1sen!2sin!4v1726430425508!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2> We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="normal">Submit</button>
        </form>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img src="logo.png" alt="" />
          <h4>Contact</h4>
          <p>
            <strong>Address: </strong>562 Wellington Road, Street 32, India
          </p>
          <p>
            <strong>Phone:</strong>+78098643245/+8976543654
          </p>
          <p>
            <strong>Hours:</strong>10:00-10:00, Mon-Sat
          </p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
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
            <img src="img/app.jpg" alt="" />
            <img src="img/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="img/pay.png" alt="" />
        </div>
      </footer>
    </>
  );
};

export default Contact;
