import React, { useState } from "react";
import { useAuth } from "./AuthContext.js";
import ReactPlayer from "react-player";
import { Link, useNavigate } from "react-router-dom";
import "../video.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as solidThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as regularThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Video1 = () => {
  const videos = [
    {
      id: 1,
      url: "../img/vid1.mp4",
      title: "Unseen Abilities",
      thumbnail: "../img/Pho1.jpeg",
      duration: 10,
      description:
        "The video highlights the inspiring work of our future creators, showcasing their dedication and skills in crafting beautiful products. We witness them meticulously assembling intricate bracelets, each one a testament to their creativity and perseverance.",
    },
    {
      id: 2,
      url: "../img/vid2.mp4",
      title: "Skills in Action",
      thumbnail: "../img/Pho2.jpeg",
      duration: 16,
      description:
        "The video highlights the inspiring work of our future creators, showcasing their dedication and skills in making vibrant diyas, hand-painted and carefully shaped, adding a personal touch to every creation. Additionally, the videos capture their involvement in plantation activities, contributing to sustainable practices by planting trees and nurturing the environment.",
    },
  ];

  const [showSellerDropdown, setShowSellerDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]); // State for comments
  const [newComment, setNewComment] = useState(""); // State for new comment
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    setTimeout(() => {
      logout();
      navigate("/UserLoginSignup");
    }, 1000);
  };
  const toggleUserDropdown = () => {
    setShowUserDropdown(true);
    setShowSellerDropdown(false);
  };
  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: selectedVideo.title,
          text: selectedVideo.description,
          url: selectedVideo.url,
        })
        .then(() => console.log("Share successful"))
        .catch((error) => console.log("Share failed", error));
    } else {
      console.log(
        "Share not supported on this browser, please copy the link manually."
      );
    }
  };

  const handleCommentPost = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(""); // Clear input after posting
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
              <Link className="active" to="/">
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
                  <Link to="/FutureCreators">Future Creators</Link>
                  <Link to="/About">Know Us</Link>
                  <Link to="/JoinUs">Join US</Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            {/* <li>
              <span onClick={toggleHireForm} style={{ cursor: "pointer" }}>
                Hire
              </span>
            </li> */}
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
              {/* User dropdown menu logic here */}
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

      <div className="video-page-container">
        <div className="main-video">
          <ReactPlayer
            url={selectedVideo.url}
            controls
            width="100%"
            height="500px"
          />
          <div className="video-header">
            <h2>{selectedVideo.title}</h2>
            <div className="video-actions">
              <button
                onClick={handleLike}
                aria-label="Like this video"
                className="like-btn"
              >
                <FontAwesomeIcon
                  icon={liked ? solidThumbsUp : regularThumbsUp}
                />
              </button>
              <button
                onClick={handleShare}
                aria-label="Share this video"
                className="share-btn"
              >
                <FontAwesomeIcon icon={faShareAlt} />
              </button>
            </div>
          </div>
          <p className="video-description">{selectedVideo.description}</p>

          {/* Add a comment section */}
          <div className="comment-section">
            <h3>Comments</h3>
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button className="comment-btn" onClick={handleCommentPost}>
              Post
            </button>
            <div className="comments-list">
              {comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Related videos */}
        <div className="video-list">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-item"
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="thumbnail"
              />
              <h3>{video.title}</h3>
              <p className="video-duration">
                Duration: {Math.round(video.duration)} sec
              </p>
            </div>
          ))}
        </div>
      </div>
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

export default Video1;
