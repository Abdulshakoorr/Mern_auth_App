import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-100 shadow-md">
      <nav className="md:container mx-auto px-4 md:px-24 flex items-center justify-between py-4 flex-wrap">
        <div className="logo">MERN_AUTH</div>
        <div className="menu_link space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="auth_link space-x-4">
          <Link to="/sign-in">Login</Link>
          <Link to="/sign-up">Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
