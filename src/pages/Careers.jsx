import { Briefcase, Heart, Cpu, Coffee } from 'lucide-react';
import './Careers.css';

const Careers = () => {
    const jobs = [
        {
            title: "Senior Frontend Developer",
            department: "Engineering",
            location: "San Francisco / Remote",
            type: "Full-time"
        },
        {
            title: "UX/UI Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time"
        },
        {
            title: "Backend Engineer (Go/Node.js)",
            department: "Engineering",
            location: "San Francisco",
            type: "Full-time"
        },
        {
            title: "Project Manager",
            department: "Product",
            location: "Remote",
            type: "Contract"
        }
    ];

    return (
        <div className="page careers-page">
            <section className="careers-hero">
                <div className="container">
                    <span className="section-label">Join Our Team</span>
                    <h1>Build the <span className="highlight">Extraordinary</span> with Us</h1>
                    <p className="lead-text">We're looking for dreamers, doers, and innovators to help shape the future of technology.</p>
                </div>
            </section>

            <section className="section culture">
                <div className="container">
                    <div className="culture-grid">
                        <div className="culture-item">
                            <Heart size={32} />
                            <h3>People First</h3>
                            <p>We prioritize mental health, work-life balance, and inclusivity.</p>
                        </div>
                        <div className="culture-item">
                            <Cpu size={32} />
                            <h3>Cutting Edge</h3>
                            <p>Work with the latest tech stack and tools in the industry.</p>
                        </div>
                        <div className="culture-item">
                            <Coffee size={32} />
                            <h3>Flexible Work</h3>
                            <p>Remote-first culture with flexible hours to suit your lifestyle.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section open-positions">
                <div className="container">
                    <div className="section-header">
                        <h2>Open Positions</h2>
                        <p>Ready to make an impact? Check out our current openings.</p>
                    </div>

                    <div className="jobs-list">
                        {jobs.map((job, index) => (
                            <div key={index} className="job-card">
                                <div className="job-info">
                                    <h3>{job.title}</h3>
                                    <div className="job-meta">
                                        <span><Briefcase size={14} /> {job.department}</span>
                                        <span>{job.location}</span>
                                        <span className="job-type">{job.type}</span>
                                    </div>
                                </div>
                                <button className="btn btn-outline">Apply Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
