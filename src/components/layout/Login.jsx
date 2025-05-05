import React from 'react';
import '../../assets/styles/login.css'; 
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container" role="main">
      <h2 className="login-title">Login</h2>

      <form aria-label="Login form" className="login-form">
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            aria-label="Email address"
            required
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            aria-label="Password"
            required
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="form-group checkbox-group">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        {/* Forgot Password */}
        <div className="form-group">
          <Link to="/forgot-password" className="link">
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="submit-button">
            Log In
          </button>
        </div>

        {/* Register Prompt */}
        <div className="form-group register-prompt">
          <p>
            Don’t have an account?{' '}
            <Link to="/register" className="link">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
