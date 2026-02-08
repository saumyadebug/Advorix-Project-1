import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                {/* Brand Section */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00f2ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="#00f2ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="#00f2ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Advorix</span>
                    </div>
                    <p className="footer-tagline">
                        Empowering businesses with cutting-edge digital solutions. We build the future of web and mobile technology.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="footer-links">
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="/services">Web Development</Link></li>
                        <li><Link to="/services">App Development</Link></li>
                        <li><Link to="/services">UI/UX Design</Link></li>
                        <li><Link to="/services">Digital Marketing</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>
                            <MapPin size={18} />
                            <span>123 Tech Park, Innovation St.<br />Silicon Valley, CA 94000</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>hello@advorix.com</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>+1 (555) 123-4567</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Advorix Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
