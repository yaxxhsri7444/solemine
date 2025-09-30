import React from "react";
import "./Menu.css";

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="menu-content">
                <h2 className="menu-title">Our Collection</h2>
                <p className="menu-description">
                    Explore our latest running shoes, sneakers, and sportswear designed for both style and performance.
                    Choose quality that matches your passion.
                </p>
                <ul className="menu-list">
                    <li>Men's Shoes</li>
                    <li>Women's Shoes</li>
                    <li>Kids' Shoes</li>
                    <li>Best Sellers</li>
                    <li>New Arrivals</li>
                    <li>Sports Gear</li>
                </ul>
                <div className="menu-buttons">
                    <button className="shop-btn">Shop Now</button>
                    <button className="category-btn">Category</button>
                </div>
                <div className="menu-available">
                    <p>Also Available On:</p>
                    <div className="platforms">
                        <span className="platform">Flipkart</span>
                        <span className="platform">Amazon</span>
                    </div>
                </div>
            </div>
            <div className="menu-image">
                <img src="image/hero-image.png" alt="Shoe Collection" />
            </div>
        </div>
    );
};

export default Menu;