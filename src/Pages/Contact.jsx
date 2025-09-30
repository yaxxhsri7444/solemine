import React from "react";
import { FaEnvelope, FaPhone, FaComments, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './contact.css';

const Contact = () => (
    <div className="contact-container">
        <div className="contact-content">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
                Questions? Feedback? Our support team is here to assist you with product inquiries, order issues, and
                anything else.
            </p>
            <ul className="contact-list">
                <li>
                    <FaEnvelope className="icon" /> 
                    <span>Email: <a href="mailto:support@nike.com">support@nike.com</a></span>
                </li>
                <li>
                    <FaPhone className="icon" /> 
                    <span>Phone: 1800-789-NIKE</span>
                </li>
                <li>
                    <FaComments className="icon" /> 
                    <span>Live Chat: Available 10am – 7pm</span>
                </li>
            </ul>
            <p className="social-text">Follow us on social media for updates and exclusive offers:</p>
            <div className="social-icons">
                <a href="#" aria-label="Facebook">
                    <FaFacebook />
                </a>
                <a href="#" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="#" aria-label="Twitter">
                    <FaTwitter />
                </a>
            </div>
        </div>
        <div className="contact-image">
            <img src="image/organic-flat-customer-support.png" alt="Support Team" />
        </div>
    </div>
);

export default Contact;