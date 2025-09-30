import React from "react";
import "./about.css";

const About = () => (
    <div className="about-container">
        <div className="about-content">
            <div className="about-text">
                <h2 className="about-title">About NIKE</h2>
                <p className="about-description">
                    NIKE stands for innovation, comfort, and performance. Since our start, we've been designing shoes
                    and apparel for athletes and everyday champions. Our mission is to inspire you to push your limits
                    and celebrate movement.
                </p>
                <p className="about-description">
                    Every shoe is engineered with the latest technology for better comfort and speed. Experience the
                    legacy of NIKE with every step you take.
                </p>
                <div className="about-buttons">
                    <button className="about-btn-primary">Learn More</button>
                    <button className="about-btn-secondary">Our Vision</button>
                </div>
            </div>
            <div className="about-image">
                <img src="image/image-removebg-preview.png" alt="Nike Innovation" />
            </div>
        </div>

        {/* Additional Features Section */}
        <div className="about-features">
            <div className="feature-card">
                <div className="feature-icon">🏃‍♂️</div>
                <h3>Innovation</h3>
                <p>Cutting-edge technology in every product</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3>Global Reach</h3>
                <p>Serving athletes worldwide since 1964</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Quality</h3>
                <p>Premium materials and craftsmanship</p>
            </div>
        </div>
    </div>
);

export default About;
