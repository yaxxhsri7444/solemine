import React from "react";
import "./footer.css";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">NIKE</h3>
            <p className="footer-description">
              Inspiring athletes worldwide with performance and style.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook" className="social-link">
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><a href="/menu">Menu</a></li>
              <li><a href="/location">Location</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-list">
              <li><a href="/help">Help Center</a></li>
              <li><a href="/shipping">Shipping Info</a></li>
              <li><a href="/returns">Returns</a></li>
              <li><a href="/size-guide">Size Guide</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="newsletter-text">Get the latest updates on new products and offers</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">© 2025 NIKE, Inc. All Rights Reserved.</p>
            <div className="footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;