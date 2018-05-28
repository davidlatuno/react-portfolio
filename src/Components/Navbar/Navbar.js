import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">David Latuno</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Projects </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About Me </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Me </Link>
                </li>
            </ul>
        </div>
    </nav>

export default Navbar;