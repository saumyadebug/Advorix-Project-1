import { Target, Users, Lightbulb, Award } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="page about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <span className="section-label">Who We Are</span>
                    <h1>Generators of Digital <span className="highlight">Innovation</span></h1>
                    <p className="lead-text">
                        Advorix Technologies is a forward-thinking software development company dedicated to transforming complex challenges into elegant digital solutions.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section mission-vision">
                <div className="container grid-2">
                    <div className="text-content">
                        <h2>Our Mission</h2>
                        <p>
                            To empower businesses with scalable, secure, and user-centric technology that drives growth and efficiency in the digital age.
                        </p>
                        <div className="stats-row">
                            <div className="stat">
                                <h3>5+</h3>
                                <span>Years</span>
                            </div>
                            <div className="stat">
                                <h3>100+</h3>
                                <span>Projects</span>
                            </div>
                            <div className="stat">
                                <h3>50+</h3>
                                <span>Experts</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-content">
                        <div className="gradient-box">
                            <Target size={48} />
                            <h3>Precision Engineering</h3>
                            <p>We don't just write code; we architect solutions that last.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section values">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Core Values</h2>
                        <p>The principles that guide every line of code we write.</p>
                    </div>

                    <div className="values-grid">
                        <div className="value-card">
                            <Lightbulb size={32} />
                            <h3>Innovation First</h3>
                            <p>We stay ahead of the curve, embracing new technologies to solve old problems.</p>
                        </div>
                        <div className="value-card">
                            <Users size={32} />
                            <h3>Client Centric</h3>
                            <p>Your success is our success. We build with your end-users in mind.</p>
                        </div>
                        <div className="value-card">
                            <Award size={32} />
                            <h3>Excellence</h3>
                            <p>Good enough isn't enough. We strive for perfection in every pixel.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
