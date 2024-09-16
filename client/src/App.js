import React, { useState } from "react";
import axios from "axios";
import "./vocify.css";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => setFormStep((prevStep) => prevStep + 1);
  const previousStep = () => setFormStep((prevStep) => prevStep - 1);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
    setError(null);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
    setError(null);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    await axios
      .post("http://localhost:8080/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        const user = res.data.user;
        console.log("User: ", user.email);
        toast.success(res.data.msg || "Login complete");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.error);
      });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, password, confirmPassword } = formData;

    if (!email || !password) {
      setError("Please fill all required fields");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/users/signup",
          {
            name,
            email,
            phone,
            address,
            password,
          }
        );
        if (response.data.success) {
          alert("Account created successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            confirmPassword: "",
            username: "",
          });
          setFormStep(0);
          setIsSignUpMode(false);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        console.error(err);
        alert("An error occurred during sign-up.");
      }
    }
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <Toaster />
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-up-form" onSubmit={handleSignUp}>
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
                  <input type="file" accept=".jpg,.jpeg,.png,.pdf" required />
                  <h2>Upload Aadhaar/PAN Card</h2>
                </div>
                <div className="file-upload">
                  <i className="fas fa-file-alt"></i>
                  <input type="file" accept=".jpg,.jpeg,.png,.pdf" required />
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
            <p>Create an account to get started.</p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
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

export default App;
