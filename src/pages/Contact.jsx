import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="page contact-page">
            <section className="contact-hero">
                <div className="container">
                    <h1>Get in <span className="highlight">Touch</span></h1>
                    <p className="lead-text">Have a project in mind? We'd love to hear from you.</p>
                </div>
            </section>

            <section className="section contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Let's chat.</h2>
                            <p className="info-intro">
                                Tell us about your project or just say hello. We are always open to new ideas and opportunities.
                            </p>

                            <div className="info-item">
                                <div className="icon-box"><Mail size={24} /></div>
                                <div>
                                    <h3>Chat with us</h3>
                                    <p>hello@advorix.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><Phone size={24} /></div>
                                <div>
                                    <h3>Call us</h3>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><MapPin size={24} /></div>
                                <div>
                                    <h3>Visit us</h3>
                                    <p>123 Tech Park, Innovation St.<br />Silicon Valley, CA</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="john@example.com" />
                                </div>

                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" placeholder="Project Inquiry" />
                                </div>

                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea rows="5" placeholder="Tell us about your project..."></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
