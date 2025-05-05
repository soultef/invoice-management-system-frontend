import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Register.css';

function Register() {
  return (
    <div className="register-container" role="main">
      <h2 className="register-title">Create Account</h2>

      <form aria-label="Registration form" className="register-form">
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Re-enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="submit-button">
            Register
          </button>
        </div>

        {/* Link to Login */}
        <div className="form-group register-login-prompt">
          <p>
            Already have an account?{' '}
            <Link to="/" className="link">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
