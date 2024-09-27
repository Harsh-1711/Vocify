import React, { useState, useEffect } from "react";
import "../home.css"; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faShoppingBag,
  faVolumeUp,
  faVolumeMute,
  faStar,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Product = () => {
  const [mainImg, setMainImg] = useState("img/handmadebag.webp");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speech = new SpeechSynthesisUtterance();

  const productDetails =
    "Handmade products crafted by special children are unique and meaningful, reflecting their creativity, talent, and resilience. These items range from upcycled fashion accessories and custom art pieces to educational kits and seasonal decor. Each product is meticulously made, embodying the children’s dedication and individual artistic expression.";

  useEffect(() => {
    const setFemaleVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      let femaleVoice = voices.find(
        (voice) =>
          voice.lang.includes("en") &&
          (voice.name.toLowerCase().includes("female") ||
            voice.name.toLowerCase().includes("woman"))
      );
      if (!femaleVoice) {
        femaleVoice = voices.find((voice) => voice.lang.includes("en"));
      }
      speech.voice = femaleVoice;
    };

    window.speechSynthesis.onvoiceschanged = setFemaleVoice;

    return () => {
      window.speechSynthesis.cancel(); // Cleanup on unmount
    };
  }, []);

  const handleReadText = () => {
    speech.text = productDetails;
    speech.lang = "en-US";
    speech.rate = 0.9;
    speech.pitch = 1.2;

    if (!isSpeaking) {
      window.speechSynthesis.speak(speech);
      setIsSpeaking(true);
      speech.onend = () => setIsSpeaking(false);
    }
  };

  const handleMuteText = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const smallImages = [
    "img/3hh.jpg",
    "img/2h.webp",
    "img/blue.jpg",
    "img/pink.jpg",
  ];

  return (
    <div>
      <header id="header">
        <a href="#" className="logo">
          <i className="fas fa-store"></i> Vocify
        </a>
        <nav>
          <ul id="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>

            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <a href="cart.html">
                <FontAwesomeIcon icon={faShoppingBag} />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={mainImg} width="100%" id="MainImg" alt="Product" />
          <div className="small-img-group">
            {smallImages.map((img, index) => (
              <div className="small-img-col" key={index}>
                <img
                  src={img}
                  width="100%"
                  className="small-img"
                  alt="Small"
                  onClick={() => setMainImg(img)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="single-pro-details">
          <h1>Handmade Paper Bags</h1>
          <h4>Say no to plastic</h4>
          <h2>Rs. 20</h2>
          <select>
            <option>Select Size</option>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
          </select>
          <input type="number" defaultValue="1" />
          <button>Add To Cart</button>
          <h4>Product Details</h4>
          <span id="product-details">{productDetails}</span>
          <br />
          <br />
          <FontAwesomeIcon
            id="readTextBtn"
            icon={faVolumeUp}
            style={{ fontSize: "24px", cursor: "pointer" }}
            onClick={handleReadText}
          />
          <FontAwesomeIcon
            id="muteTextBtn"
            icon={faVolumeMute}
            style={{ fontSize: "24px", cursor: "pointer", marginLeft: "20px" }}
            onClick={handleMuteText}
          />
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer collection</p>
        <div className="pro-container">
          {/* Repeat this block for each product */}
          {[
            { img: "img/p11.jpeg", name: "Duster", price: "Rs 20" },
            { img: "img/p8.jpeg", name: "Jewellery", price: "Rs 200" },
            { img: "img/p13.jpeg", name: "Turmeric Powder", price: "Rs 100" },
            { img: "img/f11.jpg", name: "T-shirt", price: "Rs 200" },
            { img: "img/c22.jpg", name: "Door Mat", price: "Rs 78" },
            { img: "img/p5.jpeg", name: "DIY Kits", price: "Rs 100" },
            { img: "img/c7.jpg", name: "Cups", price: "Rs 100" },
            { img: "img/doormat.jpg", name: "Door Mat", price: "Rs 120" },
          ].map((product, index) => (
            <div className="pro" key={index}>
              <img src={product.img} alt={product.name} />
              <div className="des">
                <h5>{product.name}</h5>
                <div className="star">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4>{product.price}</h4>
              </div>
              <a href="#" className="cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </div>
          ))}
        </div>
      </section>

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
            <img src="img/app.jpg" alt="" />
            <img src="img/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="img/pay.png" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Product;
