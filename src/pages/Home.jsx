import Hero from '../components/Hero';
import { Shield, Zap, TrendingUp } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            {/* Features Section */}
            <section className="section features">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Advorix?</h2>
                        <p>We deliver excellence through innovation and dedication.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="icon-box"><Shield size={32} /></div>
                            <h3>Secure Solutions</h3>
                            <p>Enterprise-grade security built into every line of code we write.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><Zap size={32} /></div>
                            <h3>High Performance</h3>
                            <p>Optimized for speed and efficiency to keep your users engaged.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><TrendingUp size={32} /></div>
                            <h3>Scalable Growth</h3>
                            <p>Architecture that grows with your business needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta">
                <div className="container cta-container">
                    <h2>Ready to Transform Your Business?</h2>
                    <p>Join hundreds of satisfied clients who have elevated their digital presence.</p>
                    <a href="/contact" className="btn btn-primary">Get in Touch</a>
                </div>
            </section>
        </div>
    );
};

export default Home;
