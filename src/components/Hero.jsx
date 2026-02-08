import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">

                <div className="hero-top">
                    <div className="hero-badge">
                        <span>/// Est. 2026 // Advorix Tech</span>
                    </div>
                    <h1>
                        <span className="line line-1">Digital</span>
                        <span className="line line-2">Evolution</span>
                    </h1>
                </div>

                <div className="hero-middle">
                    <div className="hero-description">
                        <p>
                            We don't just build websites. We engineer digital dominance.
                            Meticulous code, brutal aesthetics, and performance that breaks benchmarks.
                        </p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary">
                                Initiate Project
                            </Link>
                            <Link to="/services" className="link-arrow">
                                Explore capabilities <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="hero-visual-text">
                        <span>[ SYSTEM READY ]</span>
                        <span>[ AWAITING INPUT ]</span>
                    </div>
                </div>

                <div className="hero-bottom">
                    <div className="scroll-indicator">
                        <ArrowDownRight size={32} />
                        <span>Scroll for data</span>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-val">99.9%</span>
                            <span className="stat-key">Uptime</span>
                        </div>
                        <div className="stat">
                            <span className="stat-val">Global</span>
                            <span className="stat-key">Reach</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Decorative Grid Background */}
            <div className="grid-bg"></div>
        </section>
    );
};

export default Hero;
