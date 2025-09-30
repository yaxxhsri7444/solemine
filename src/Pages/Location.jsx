import React from "react";
import './location.css';

const Location = () => (
    <div className="location-container">
        <div className="location-content">
            <h2 className="location-title">Visit Our Store</h2>
            <p className="location-description">
                Find us in your city and step in to experience comfort and performance footwear. Get directions or view
                our global outlets.
            </p>

            <ul className="location-list">
                <li>
                    <span className="location-icon">📍</span>
                    <span>Mumbai – Linking Road, Bandra</span>
                </li>
                <li>
                    <span className="location-icon">📍</span>
                    <span>Delhi – Connaught Place</span>
                </li>
                <li>
                    <span className="location-icon">📍</span>
                    <span>Bangalore – MG Road</span>
                </li>
                <li>
                    <span className="location-icon">📍</span>
                    <span>International Outlets – USA, UK, Europe</span>
                </li>
            </ul>

            <div className="location-extra">
                <p>Use our <span className="locator-link">Online Store Locator</span> for more details.</p>
            </div>

            <div className="location-buttons">
                <button className="directions-btn">Get Directions</button>
                <button className="locator-btn">Store Locator</button>
            </div>
        </div>

        <div className="location-image">
            <img src="image/4043715-removebg-preview.png" alt="Nike Store Location" />
        </div>
    </div>
);

export default Location;