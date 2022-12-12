import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <nav className="navbar  bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbarToggle py-1 navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse rounded-2 bg-primary w-100"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="ps-4 nav-link text-light fs-5"
                  aria-current="page"
                  to="/"
                >
                  ITE4
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="ps-4 nav-link text-light fs-5"
                  aria-current="page"
                  to="/spi"
                >
                  Social and Professional Issue
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;
