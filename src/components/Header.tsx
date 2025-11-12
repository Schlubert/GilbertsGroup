// src/components/Header.tsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-alpine-green text-white px-6 py-4 flex items-center justify-between shadow-md">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/logo-gilberts-white.png"
          alt="Gilberts Group logo"
          className="h-10 w-auto"
        />
      </Link>
      <nav className="flex space-x-6">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-emerald-200 transition-colors ${isActive ? "underline" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/philosophy"
          className={({ isActive }) =>
            `hover:text-emerald-200 transition-colors ${isActive ? "underline" : ""}`
          }
        >
          Philosophy
        </NavLink>
        <NavLink
          to="/companies"
          className={({ isActive }) =>
            `hover:text-emerald-200 transition-colors ${isActive ? "underline" : ""}`
          }
        >
          Companies
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-emerald-200 transition-colors ${isActive ? "underline" : ""}`
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
