import React, { useState } from "react";

import Constants from "./../Constants/constants.js";
import { useNavigate } from "react-router-dom";

import "./../Util/GlobalStyles.css";

import "./Login.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/profile");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration or login logic here based on isSignUp state
    // Access the entered data using formData.email and formData.password for login,
    // or formData.name, formData.email, and formData.password for registration.
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
      name: e.target.name.value,
    };

    if (isSignUp) {
      console.log("Registration data:", formData);
      // Add your registration logic here
    } else {
      console.log("Login data:", formData);
      // Add your login logic here
    }
    handleNavigation();

  };
  

  return (
    <div className="LoginPageContainer flex-center-col">
      <div className="signUp_outerContainer">
        <h1 className="greeting login_comp"> Hello 👋🏻</h1>
        <div className="signUpContainer login_comp">
          <form onSubmit={handleSubmit} className="flex-center-col">
            {isSignUp && (
              <div className="form-group ">
                <input
                  className="loginFormInputs"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
            )}
            <div className="form-group">
              <input
                className="loginFormInputs"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="loginFormInputs"
                type="password"
                name="password"
                placeholder={isSignUp ? "Password" : "Create Password"}
                required
              />
            </div>
            <button className="OtpButton">
              {isSignUp ? "Register" : "Log in"}
            </button>
          </form>
          
        </div>
        <p className="createAccount login_comp">
          {isSignUp ? "Account already exists?" : "New to CodigBuddy"}
          <span className="newAccountLink" onClick={toggleSignUp}>
            {isSignUp ? "Login" : "Register"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
