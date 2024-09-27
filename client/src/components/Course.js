import React, { useState } from "react";
import "../course.css"; // Assuming you have CSS styles in App.css
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
    <section id="header">
      <a href="#" className="logo">
        <i className="fas fa-store"></i> Vocify
      </a>
      <div>
        <ul id="navbar">
          <li>
            {" "}
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
  );
};

const LatestCourses = () => {
  return (
    <section id="latest-courses">
      <h2>Latest Courses</h2>
      <div className="course-grid">
        <div className="course-card">
          <img src="/img/coursee1.jpg" alt="Course 1" />
          <h3>Vocational Training for Employment</h3>

          <button className="btn">Enroll Now</button>
        </div>
        <div className="course-card">
          <img src="/img/coursee2.jpg" alt="Course 2" />
          <h3>Music Therapy and Expression</h3>
          {/* <p>Description: Uses music as a medium for emotional expression and therapeutic interaction.</p> */}
          {/* <p>Skills Developed: Emotional regulation, creativity, and sensory engagement.</p> */}
          <button className="btn">Enroll Now</button>
        </div>
      </div>
    </section>
  );
};

const Counseling = () => {
  return (
    <section id="counseling">
      <h2>Counseling</h2>
      <p>
        Our expert counselors are here to help you choose the best courses for
        your career path. Reach out to us for personalized advice and guidance.
      </p>
      <button className="btn">Get Counseling</button>
    </section>
  );
};

const FeaturedProducts = () => {
  return (
    <section id="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        <div className="product-card">
          <img src="/img/coursee3.jpg" alt="Product 1" />
          <h3>Basic Life Skills</h3>
          {/* <p>Description: Focuses on essential life skills such as personal hygiene, cooking, cleaning, and money management.</p> */}
          {/* <p>Skills Developed: Independence, problem-solving, and self-care.</p> */}
          <button className="btn">Buy Now</button>
        </div>
        <div className="product-card">
          <img src="/img/coursee4.jpg" alt="Product 2" />
          <h3>Digital Literacy for Beginners</h3>
          {/* <p>Description: Introduces the basics of using computers, smartphones, and the internet.</p> */}
          {/* <p>Skills Developed: Basic computing, safe browsing, and communication.</p> */}
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

const EngageAndWin = () => {
  const [gameResult, setGameResult] = useState("");
  const guessNumber = () => {
    const guess = parseInt(document.getElementById("guess").value);
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (guess === randomNumber) {
      setGameResult("Congratulations! You guessed the correct number!");
    } else {
      setGameResult(
        `Sorry, the correct number was ${randomNumber}. Try again!`
      );
    }
  };

  return (
    <section id="games">
      <h2>Engage & Win</h2>
      <div id="game">
        <h3>Guess the Number</h3>
        <input
          type="number"
          id="guess"
          placeholder="Enter a number between 1 and 10"
        />
        <br></br>
        <br></br>
        <button className="btn" onClick={guessNumber}>
          Submit Guess
        </button>
        <div id="game-result">{gameResult}</div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        {/* <img src="logo.png" alt="" /> */}
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
        <img src="img/pay.jpg" alt="" />
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <LatestCourses />
      <Counseling />
      <FeaturedProducts />
      <EngageAndWin />
      <Footer />
    </div>
  );
};

export default App;
