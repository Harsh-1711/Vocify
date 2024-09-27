import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import "../abt.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [showSellerDropdown, setShowSellerDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  // const { user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  const toggleSellerDropdown = () => {
    setShowSellerDropdown(true);
    setShowUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(true);
    setShowSellerDropdown(false);
  };
  // const navigate = useNavigate();

  return (
    <>
      {/* Header Section */}
      <section id="header">
        <a href="#" className="logo">
          <i className="fas fa-store"></i> Vocify
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
                  <Link to="/About"></Link>
                  <Link to="/Course">Courses</Link>
                  <Link to="/Campaign">Campaign</Link>
                  <Link to="/Campaign">Future Creators</Link>
                </div>
              )}
            </li>

            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            {/* <li><Link to="/Course">Course</Link></li> */}
            <li>
              <Link to="/Cart">
                <FontAwesomeIcon icon={faShoppingBag} />
              </Link>
            </li>
            <li>
              <i
                className="fas fa-user login-icon"
                id="loginIcon"
                onClick={handleModalOpen}
              ></i>
            </li>
          </ul>
        </div>
      </section>

      {/* Page Header */}
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <br />
        <p>
          {/* Welcome to Vocify, your trusted platform for empowering educational institutions and helping passionate individuals take their skills to the next level. 
          We are dedicated to building an innovative e-commerce experience tailored specifically for certified educators, trainers, and institutions to share their 
          expertise with a wider audience. */}
        </p>
      </section>

      {/* About Section */}
      <section id="about-head" className="section-p1">
        <img src="/img/a6.jpg" alt="About Vocify" />
        <div>
          <h2>Who Are We?</h2>
          <p>
            At Vocify, we believe in the power of knowledge and the importance
            of fostering connections between learners and educators. We provide
            a marketplace that brings certified courses, workshops, and learning
            materials to people who are eager to grow in their careers,
            academics, or personal development. Our mission is simple: to make
            quality education accessible and affordable, while empowering
            sellers to share their knowledge with the world.
          </p>
          <br />
          <br />
          <marquee
            style={{ backgroundColor: "#fffffd" }}
            loop="-1"
            scrollAmount="5"
            width="100%"
          >
            Join Us. Vocify is here to help you achieve your goals. Together, we
            can create a future where knowledge is shared freely, and
            opportunities for learning are limitless.
          </marquee>
        </div>
      </section>

      {/* Video Section */}
      <section id="about-app" className="section-p1">
        <h1>Your differences are your superpowers :)</h1>
        <div className="video">
          <video
            autoPlay
            controls
            src="/img/WhatsApp Video 2024-09-14 at 12.51.29 PM.mp4"
          />
        </div>
      </section>

      {/* Feature Cards Section */}
      <div className="feature-cards">
        {[
          { src: "/img/1.webp" },
          { src: "/img/2.jpg" },
          { src: "/img/3.png" },
          { src: "/img/4.png" },
          { src: "/img/5.jpg" },
          { src: "/img/6.jpg" },
          // { src: "/img/6.jpg" title: "24/7 Support" },
        ].map((card, index) => (
          <div className="card" key={index}>
            <img src={card.src} alt={card.title} />
            <p className="title">{card.title}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
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
    </>
  );
};

export default About;
