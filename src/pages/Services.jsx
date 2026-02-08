import { Code, Smartphone, Palette, Cloud, Database, Lock } from 'lucide-react';
import './Services.css';

const Services = () => {
    const servicesList = [
        {
            icon: <Code size={40} />,
            title: "Custom Web Development",
            description: "Scalable, high-performance websites and web applications tailored to your business needs.",
            features: ["React/Next.js", "Progressive Web Apps", "E-commerce Solutions"]
        },
        {
            icon: <Smartphone size={40} />,
            title: "Mobile App Development",
            description: "Native and cross-platform mobile apps that provide seamless user experiences.",
            features: ["iOS & Android", "Flutter/React Native", "App Store Optimization"]
        },
        {
            icon: <Palette size={40} />,
            title: "UI/UX Design",
            description: "User-centric designs that are visually stunning and intuitive to navigate.",
            features: ["Wireframing", "Prototyping", "User Research"]
        },
        {
            icon: <Cloud size={40} />,
            title: "Cloud Solutions",
            description: "Secure and scalable cloud infrastructure to power your digital ecosystem.",
            features: ["AWS/Azure/GCP", "DevOps & CI/CD", "Cloud Migration"]
        },
        {
            icon: <Database size={40} />,
            title: "Data Analytics",
            description: "Turn data into actionable insights with our advanced analytics solutions.",
            features: ["Big Data", "Business Intelligence", "Data Visualization"]
        },
        {
            icon: <Lock size={40} />,
            title: "Cybersecurity",
            description: "Protect your digital assets with our comprehensive security audits and solutions.",
            features: ["Security Audits", "Penetration Testing", "Compliance"]
        }
    ];

    return (
        <div className="page services-page">
            <section className="services-hero">
                <div className="container">
                    <h1>Our <span className="highlight">Services</span></h1>
                    <p className="lead-text">Comprehensive digital solutions driven by technology and creativity.</p>
                </div>
            </section>

            <section className="section services-grid-section">
                <div className="container">
                    <div className="services-grid">
                        {servicesList.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="container">
                    <h2>Need a Custom Solution?</h2>
                    <p>We specialize in solving unique business challenges.</p>
                    <a href="/contact" className="btn btn-primary">Talk to an Expert</a>
                </div>
            </section>
        </div>
    );
};

export default Services;
