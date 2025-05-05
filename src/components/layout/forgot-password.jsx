import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/forgotPassword.css';

function ForgotPassword() {
  return (
    <div className="forgot-container" role="main">
      <h2 className="forgot-title">Reset Your Password</h2>
      <p className="forgot-description">
        Enter the email address associated with your account, and we'll send you instructions to reset your password.
      </p>

      <form className="forgot-form" aria-label="Forgot password form">
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

        <div className="form-group">
          <button type="submit" className="submit-button">
            Send Reset Link
          </button>
        </div>

        <div className="form-group back-to-login">
          <p>
            Remember your password?{' '}
            <Link to="/" className="link">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
