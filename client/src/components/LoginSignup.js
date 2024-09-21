import React, { useState, useRef } from "react";
import axios from "axios";
import "../vocify.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const [files, setFiles] = useState({
    aadharCard: null,
    certification: null,
  });
  const [error, setError] = useState(null);

  const aadharCardRef = useRef(null);
  const certificationRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: files[0],
    }));
  };

  const nextStep = () => {
    if (formStep === 0) {
      if (!formData.name || !formData.email) {
        toast.error("Please fill out all fields.");
        return false;
      }
      if (formData.name.length < 5 || formData.name.length > 20) {
        toast.error("Full name must contain at least 5 characters.");
        return false;
      }
      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        toast.error("Please enter a valid email ID.");
        return false;
      }
    } else if (formStep === 1) {
      if (!formData.phone || !formData.address) {
        toast.error("Please fill out all fields.");
        return false;
      }
      if (!/^\d{10}$/.test(formData.phone)) {
        toast.error("Please enter a valid 10-digit phone number.");
        return false;
      }
      if (formData.address.length < 10) {
        toast.error("Address must be at least 10 characters long.");
        return false;
      }
    } else if (formStep === 2) {
      if (!files.aadharCard || !files.certification) {
        toast.error("Please upload both Aadhaar card and certification.");
        return false;
      }
    } else if (formStep === 3) {
      if (!formData.password || !formData.confirmPassword) {
        toast.error("Please fill out all fields.");
        return false;
      }
      if (formData.password.length < 7 || formData.password.length > 15) {
        toast.error("Password must be between 7 and 15 characters.");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match.");
        return false;
      }
    }
    setFormStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => setFormStep((prevStep) => prevStep - 1);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
    setError(null);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
    setError(null);
  };
  const validateSignUpForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.address
    ) {
      toast.error("Please fill out all fields.");
      return false;
    }

    if (formData.name.length < 5 || formData.name.length > 20) {
      toast.error("Full name must contain atleast 5 characters.");
      return false;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email ID.");
      return false;
    }
    if (formData.phone.length < 10) {
      toast.error("Please enter a valid phone number.");
      return false;
    }
    if (!files.aadharCard) {
      toast.error("Please upload your Aadhaar Card.");
      return false;
    }
    if (!files.certification) {
      toast.error("Please upload your Proof certificate.");
      return false;
    }
    if (!formData.password.match(/^[A-Za-z0-9@#]{7,15}$/)) {
      toast.error("Password must contain atleast 7 characters");
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
    const { email, password } = formData;
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          email,
          password,
        }
      );
      const user = response.data.user;
      console.log("User: ", user.email);
      toast.success(response.data.msg || "Login complete");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, password, confirmPassword } = formData;

    if (validateSignUpForm()) {
      const formDataToSend = new FormData();
      formDataToSend.append("name", name);
      formDataToSend.append("email", email);
      formDataToSend.append("phone", phone);
      formDataToSend.append("address", address);
      formDataToSend.append("password", password);
      formDataToSend.append("confirmPassword", confirmPassword);

      if (files.aadharCard) {
        formDataToSend.append("aadharCard", files.aadharCard);
      }
      if (files.certification) {
        formDataToSend.append("certification", files.certification);
      }

      try {
        const response = await axios.post(
          "http://localhost:8080/api/users/signup",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data.success) {
          toast.success("Account created successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            confirmPassword: "",
            username: "",
          });
          setFiles({
            aadharCard: null,
            certification: null,
          });
          setFormStep(0);
          setIsSignUpMode(false);
        } else {
          toast.error(response.data.message);
        }
      } catch (err) {
        console.error(err);
        toast.error("An error occurred during sign-up.");
      }
    }
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <Toaster />
      <div className="forms-container">
        <div className="signin-signup">
          <form
            className="sign-up-form"
            encType="multipart/form-data"
            method="POST"
            onSubmit={handleSignUp}
          >
            <h2 className="title">Create Account</h2>

            {formStep === 0 && (
              <div className="form-step">
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
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
                    required
                  />
                </div>
                <div className="step-buttons">
                  <button
                    type="button"
                    className="btn next-step"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {formStep === 1 && (
              <div className="form-step">
                <div className="input-field">
                  <i className="fas fa-phone"></i>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-map-marker-alt"></i>
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="step-buttons">
                  <button
                    type="button"
                    className="btn previous-step"
                    onClick={previousStep}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="btn next-step"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {formStep === 2 && (
              <div className="form-step">
                <div className="file-upload">
                  <i className="fas fa-id-card"></i>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    name="aadharCard"
                    onChange={handleFileChange}
                    ref={aadharCardRef}
                    required
                  />
                  <h2>Upload Aadhaar/PAN Card</h2>
                </div>
                <div className="file-upload">
                  <i className="fas fa-file-alt"></i>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    name="certification"
                    onChange={handleFileChange}
                    ref={certificationRef}
                    required
                  />
                  <h2>Upload Certification</h2>
                </div>
                <div className="step-buttons">
                  <button
                    type="button"
                    className="btn previous-step"
                    onClick={previousStep}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="btn next-step"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {formStep === 3 && (
              <div className="form-step">
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
                <div className="step-buttons">
                  <button
                    type="button"
                    className="btn previous-step"
                    onClick={previousStep}
                  >
                    Previous
                  </button>
                  <button type="submit" className="btn">
                    Sign Up
                  </button>
                </div>
              </div>
            )}
          </form>

          <form className="sign-in-form" onSubmit={handleSignIn}>
            <h2 className="title">Seller</h2>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
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
                autoComplete="password"
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn solid">
              Login
            </button>
          </form>

          {error && <div className="error">{error}</div>}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p className="p1" style={{ color: "white" }}>
              Create an account to get started.
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p className="p1" style={{ color: "white" }}>
              If you already have an account, just sign in. We've missed you!
            </p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
