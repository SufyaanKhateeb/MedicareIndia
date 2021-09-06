import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ backgroundColor: "#f7fafc" }}
        >
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="/img/logo1.png" alt="" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/location" style={{ textDecoration: "none" }}>
                                <a className="nav-link active" aria-current="page" href="/">
                                    Location
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/service" style={{ textDecoration: "none" , color:"white"}}>
                                <a className="nav-link active" aria-current="page" href="/">
                                    Service
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" style={{ textDecoration: "none" }}>
                                <a className="nav-link active" aria-current="page" href="/">
                                    About Us
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
