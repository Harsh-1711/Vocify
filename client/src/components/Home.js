import React, { useState } from "react";
import "../home.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div>
      {/* Header Section */}
      <section id="header">
        <a href="#" className="logo">
          <i className="fas fa-store"></i> Vocify
        </a>

        <div>
          <ul id="navbar">
            <li>
              <a className="active" href="home.html">
                Home
              </a>
            </li>
            <li>
              <a href="shop.html">Shop</a>
            </li>
            <li>
              <a href="abt.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="cart.html">
                <i className="fas fa-shopping-bag"></i>
              </a>
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

        {/* Login Modal */}
        {showModal && (
          <div className="modal" id="loginModal">
            <div className="modal-content">
              <span className="modal-close" onClick={handleModalClose}>
                &times;
              </span>
              <h2>Login As</h2>
              <button onClick={() => (window.location.href = "login.html")}>
                Buyer
              </button>
              <button onClick={() => (window.location.href = "signin.html")}>
                Seller
              </button>
            </div>
          </div>
        )}
      </section>

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
          <img src="/img/bggp.jpg" alt="Product Image" />
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="feature-cards">
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
            <img src={card.src} alt={card.title} />
            <p className="title">{card.title}</p>
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
              <a href="#" className="cart">
                <i className="fas fa-shopping-cart"></i>
              </a>
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
              <a href="#" className="cart">
                <i className="fas fa-shopping-cart"></i>
              </a>
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
          <h3> Diwali Dhamaka - 50% OFF</h3>
        </div>
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
          <img src="/img/logo.png" alt="" />
          <h4>Contact</h4>
          <p>
            <strong>Address: </strong> 562 Wellington Road, Street 32, India
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
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
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
            <img src="/img/app.jpg" alt="" />
            <img src="/img/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="/img/pay.png" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
