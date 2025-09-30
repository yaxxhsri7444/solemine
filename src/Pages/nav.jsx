import React, { useState } from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav>
                <div className="brand-logo">
                    <img src="image/brand_logo.png" alt="logo" onClick={() => handleNavigation("/")} />
                </div>
                
                {/* Hamburger Menu */}
                <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={isMenuOpen ? "active" : ""}>
                    <li onClick={() => handleNavigation("/menu")}>
                        Menu
                    </li>
                    <li onClick={() => handleNavigation("/location")}>
                        Location
                    </li>
                    <li onClick={() => handleNavigation("/about")}>
                        About
                    </li>
                    <li onClick={() => handleNavigation("/contact")}>
                        Contact Us
                    </li>
                </ul>
                
                <div className={`nav-button ${isMenuOpen ? "active" : ""}`}>
                    <button className="btns" onClick={() => handleNavigation("/auth")}>Login</button>
                </div>
            </nav>
        </div>
    );
};