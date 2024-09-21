import React, { useState } from "react";
import axios from "axios";
import "../userlogin.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./AuthContext";

const UserLoginSignup = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    state: "",
    zip: "",
  });

  const nextStep = () => {
    if (formStep === 0) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error("Please fill out all fields.");
        return;
      }
      if (!/^\d{10}$/.test(formData.phone)) {
        toast.error("Please enter a valid 10-digit phone number.");
        return;
      }
    } else if (formStep === 1) {
      if (!formData.address || !formData.state || !formData.zip) {
        toast.error("Please fill out all fields.");
        return;
      }
    }
    setFormStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => setFormStep((prevStep) => prevStep - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Sign-in form validation
  const validateSignInForm = () => {
    if (!formData.email || !formData.password) {
      toast.error("Email and password are required.");
      return false;
    }

    return true;
  };

  const validateSignUpForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.address ||
      !formData.state ||
      !formData.zip
    ) {
      toast.error("Please fill out all fields.");
      return false;
    }

    if (formData.name.length < 5 || formData.name.length > 20) {
      toast.error("Full name must be between 5 and 20 characters.");
      return false;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email ID.");
      return false;
    }

    if (!formData.password.match(/^[A-Za-z0-9@]{7,15}$/)) {
      toast.error(
        "Password is invalid. It must be between 7 and 15 alphanumeric characters."
      );
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }

    return true;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (validateSignInForm()) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/buyers/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );
        toast.success("Login successful");
        console.log("Login successful", response.data);
        login(response.data.user);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        const errorMessage =
          error.response?.data?.error ||
          "Error during sign-in. Please try again.";
        toast.error(errorMessage);
        console.error("Error during sign-in:", errorMessage);
      }
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (validateSignUpForm()) {
      axios
        .post("http://localhost:8080/api/buyers/signup", { ...formData })
        .then((response) => {
          toast.success("Sign-up successful");
          console.log("Sign-up successful", response.data);
          login(response.data.user);
          setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            confirmPassword: "",
            username: "",
            state: "",
            zip: "",
          });
          setIsSignUpMode(false);
        })

        .catch((error) => {
          const errorMessage =
            error.response?.data?.error ||
            "Error during sign-in. Please try again.";
          toast.error(errorMessage);
          console.error("Error during sign-in:", errorMessage);
        });
    }
  };
  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <Toaster /> {/* Toast notification container */}
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign-in Form */}
          <form className="sign-in-form" onSubmit={handleSignIn}>
            <h2 className="title1">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          {/* Sign-up Form */}
          <form className="sign-up-form" onSubmit={handleSignUp}>
            <h2 className="title1" id="title1">
              Sign up
            </h2>

            {formStep === 0 && (
              <>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-phone"></i>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                  />
                </div>
              </>
            )}

            {formStep === 1 && (
              <>
                <div className="input-field">
                  <i className="fas fa-home"></i>
                  <input
                    type="text"
                    placeholder="Complete Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-briefcase"></i>
                  <input
                    type="text"
                    placeholder="State/Province"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-map-marker-alt"></i>
                  <input
                    type="text"
                    placeholder="ZIP/Postal Code"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            )}

            {formStep === 2 && (
              <>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            )}

            <div className="step-buttons">
              {formStep > 0 && (
                <button type="button" className="btn" onClick={previousStep}>
                  Previous
                </button>
              )}
              {formStep < 2 ? (
                <button type="button" className="btn" onClick={nextStep}>
                  Next
                </button>
              ) : (
                <button type="submit" className="btn">
                  Sign Up
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p style={{ color: "white" }}>
              Join us to work productively, fruitfully, and efficiently.
            </p>
            <button
              className="btn transparent"
              onClick={() => setIsSignUpMode(true)}
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p style={{ color: "white" }}>
              Welcome back! Stay tuned for more new features!
            </p>
            <button
              className="btn transparent"
              onClick={() => setIsSignUpMode(false)}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginSignup;
