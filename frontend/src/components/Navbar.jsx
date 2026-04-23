import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import myLogo from "./logo.svg";

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
  <Link to="/" className="navbar-logo">
    <img src={myLogo} alt="Logo" className="brand-icon" />
    <span>TraiteMate</span>
  </Link>
</div>
      <div className="navbar-menu">
        {user ? (
          <>
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/quiz-selection" className="nav-item">
              Take Quiz
            </Link>
            <Link to="/results" className="nav-item">
              Results
            </Link>
            <button onClick={handleLogout} className="nav-item logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
