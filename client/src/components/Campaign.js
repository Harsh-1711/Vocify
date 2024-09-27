import React, { useState, useEffect } from "react";
import "../campaign.css"; // Assuming you have the necessary CSS styles here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Campaign = () => {
  const [progress, setProgress] = useState(65); // Initial progress
  const [donationAmount, setDonationAmount] = useState("");

  // Progress bar update logic
  useEffect(() => {
    const progressBar = document.getElementById("progressBar");
    const progressLabel = document.getElementById("progressLabel");
    if (progressBar && progressLabel) {
      progressBar.style.width = `${progress}%`;
      progressLabel.textContent = `${progress}%`;
    }
  }, [progress]);

  // Handle donation form submission
  const handleDonationSubmit = (e) => {
    e.preventDefault();
    if (donationAmount) {
      alert(`Thank you for your donation of Rs. ${donationAmount}!`);
      setDonationAmount(""); // Reset the form
    } else {
      alert("Please enter a valid amount.");
    }
  };

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
              <a href="home.html">Home</a>
            </li>
            <li>
              <a className="active" href="campaign.html">
                Campaign
              </a>
            </li>
            <li>
              <a href="courses.html">Courses</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="cart.html">
                <FontAwesomeIcon icon={faShoppingBag} />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section id="hero">
        <div className="hero-banner-container">
          <img src="/img/campaign1.png" alt="Hero Banner" />
        </div>
      </section>

      {/* Campaign Section
      <section id="campaign" className="section-p1">
        <div className="campaign-banner">
          <img src="campaign1.png" alt="Campaign Banner" />
        </div>
      </section> */}

      {/* Campaign Details Section */}
      <section id="campaign-details" className="section-p2">
        <div className="campaign-info">
          <h2>Empower Through Art</h2>
          <p>
            The "Empower Through Art" campaign focuses on supporting individuals
            with intellectual disabilities by providing them with a platform to
            showcase their creativity through handmade products. Your
            contributions will go towards purchasing art supplies, organizing
            workshops, and giving them the opportunity to sell their creations
            online.
          </p>
          <h3>How You Can Help</h3>
          <ul>
            <li>Donate to support art workshops and material supplies.</li>
            <li>Spread awareness by sharing the campaign on social media.</li>
            <li>Buy handcrafted items made by the campaign participants.</li>
          </ul>
        </div>
      </section>

      {/* Previous Campaigns Section */}
      <section id="previous-campaigns" className="section-p5">
        <h2>Previous Campaigns</h2>
        <div className="campaign-grid">
          <div className="campaign-card">
            <img src="/img/camp1.jpeg" alt="Campaign 1" />
            <div className="campaign-info">
              <h3>Empower Through Crafts</h3>
              <p>
                Helping individuals with intellectual disabilities express
                creativity through handmade crafts. This campaign raised Rs.
                80,000.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>
          <div className="campaign-card">
            <img src="/img/camp3.jpeg" alt="Campaign 2" />
            <div className="campaign-info">
              <h3>Vocational Training Initiative</h3>
              <p>
                Providing vocational training to help people with intellectual
                disabilities become self-sufficient. Raised Rs. 1,20,000.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>
          <div className="campaign-card">
            <img src="/img/camp2.jpeg" alt="Campaign 3" />
            <div className="campaign-info">
              <h3>Inclusive Musical Workshop</h3>
              <p>
                A creative platform for individuals to explore their musical
                talents. Raised Rs. 95,000.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Progress Section */}
      <section id="donation-progress" className="section-p3">
        <h2>Campaign Progress</h2>
        <div className="progress-container">
          <div className="progress-bar" id="progressBar">
            <span id="progressLabel">65%</span>
          </div>
        </div>
        <p>
          Our goal is to raise Rs. 1,00,000 for art workshops. With your help,
          we've already reached 65% of our goal!
        </p>
        <button className="btn">Donate</button>
      </section>

      {/* Donate Section */}
      <section id="donate" className="section-p4">
        <h2>Donate to Support the Cause</h2>
        <form id="donation-form" onSubmit={handleDonationSubmit}>
          <label htmlFor="amount">Donation Amount (Rs):</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            required
          />
          <button type="submit" className="btn">
            Donate
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="section-p1">
        <div className="col">
          <img src="logo.png" alt="" />
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong> 562 Wellington Road, Street 32, India
          </p>
          <p>
            <strong>Phone:</strong> +78098643245 / +8976543654
          </p>
          <p>
            <strong>Hours:</strong> 10:00 - 10:00, Mon-Sat
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
            <img src="img/app.jpg" alt="" />
            <img src="img/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="img/pay.png" alt="Payment Gateways" />
        </div>
      </footer>
    </div>
  );
};

export default Campaign;
