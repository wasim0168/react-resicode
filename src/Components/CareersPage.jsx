// CareersPage.jsx
import React, { useState } from 'react';

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    linkedin: '',
    referral: '',
    noticePeriod: 'immediate'
  });
  const [isApplying, setIsApplying] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Sample job listings
  const jobListings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Nagpur, Maharashtra",
      experience: "3-5 years",
      postedDate: "2 days ago",
      description: "We're looking for an experienced Full Stack Developer to join our growing team. You'll be working on cutting-edge web applications using React, Node.js, and modern cloud technologies.",
      responsibilities: [
        "Design and develop scalable web applications",
        "Collaborate with cross-functional teams",
        "Write clean, maintainable code",
        "Participate in code reviews",
        "Mentor junior developers"
      ],
      requirements: [
        "3+ years experience with React/Node.js",
        "Strong knowledge of MongoDB/PostgreSQL",
        "Experience with AWS/GCP",
        "Excellent problem-solving skills",
        "Bachelor's degree in Computer Science or related field"
      ],
      perks: ["Remote work options", "Health insurance", "Learning budget", "Flexible hours"]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote",
      experience: "2-4 years",
      postedDate: "1 week ago",
      description: "Create beautiful and intuitive user experiences for our products. Work closely with developers and product managers to bring designs to life.",
      responsibilities: [
        "Design user interfaces for web and mobile",
        "Create prototypes and wireframes",
        "Conduct user research and testing",
        "Develop design systems",
        "Collaborate with development teams"
      ],
      requirements: [
        "Proficiency in Figma, Adobe Creative Suite",
        "Portfolio showcasing UI/UX work",
        "Understanding of responsive design",
        "Knowledge of accessibility standards",
        "Excellent communication skills"
      ],
      perks: ["Remote-first", "Design tools subscription", "Conference budget", "Creative freedom"]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Operations",
      type: "Full-time",
      location: "Nagpur, Maharashtra",
      experience: "2-3 years",
      postedDate: "3 days ago",
      description: "Help us build and maintain our cloud infrastructure. Implement CI/CD pipelines and ensure system reliability.",
      responsibilities: [
        "Manage AWS/GCP infrastructure",
        "Implement CI/CD pipelines",
        "Monitor system performance",
        "Ensure security best practices",
        "Automate deployment processes"
      ],
      requirements: [
        "Experience with Docker/Kubernetes",
        "Knowledge of Terraform/CloudFormation",
        "Familiarity with monitoring tools",
        "Understanding of networking concepts",
        "Scripting skills (Bash/Python)"
      ],
      perks: ["Certification support", "Latest hardware", "On-call compensation", "Cloud credits"]
    },
    {
      id: 4,
      title: "Marketing Intern",
      department: "Marketing",
      type: "Internship",
      location: "Nagpur, Maharashtra",
      experience: "0-1 years",
      postedDate: "5 days ago",
      description: "Great opportunity for students to gain real-world marketing experience. Learn digital marketing strategies and content creation.",
      responsibilities: [
        "Assist with social media campaigns",
        "Create marketing content",
        "Conduct market research",
        "Support email marketing efforts",
        "Analyze campaign performance"
      ],
      requirements: [
        "Pursuing degree in Marketing/Business",
        "Good communication skills",
        "Basic understanding of digital marketing",
        "Creative mindset",
        "Eagerness to learn"
      ],
      perks: ["Stipend provided", "Certificate of completion", "Mentorship program", "Potential full-time offer"]
    }
  ];

  const departments = [
    { id: 'all', name: 'All Roles', count: jobListings.length },
    { id: 'engineering', name: 'Engineering', count: 2 },
    { id: 'design', name: 'Design', count: 1 },
    { id: 'marketing', name: 'Marketing', count: 1 },
    { id: 'operations', name: 'Operations', count: 1 }
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setApplicationForm({
      ...applicationForm,
      position: job.title
    });
    setShowApplicationForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setApplicationForm({
        ...applicationForm,
        resume: files[0]
      });
    } else {
      setApplicationForm({
        ...applicationForm,
        [name]: value
      });
    }
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setIsApplying(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Application submitted successfully!');
      setShowApplicationForm(false);
      setApplicationForm({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        resume: null,
        coverLetter: '',
        portfolio: '',
        linkedin: '',
        referral: '',
        noticePeriod: 'immediate'
      });
    } catch (error) {
      alert('Error submitting application. Please try again.',error);
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Build Your Career at <span className="highlight"><span style={{color:"#E268A0"}}>RESI</span>CODE</span>
            </h1>
            <p className="hero-subtitle">
              Join our team of innovators and problem-solvers. Create impactful solutions that make a difference.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Countries Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Client Rating</div>
              </div>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="floating-elements">
              <div className="element element-1">🚀</div>
              <div className="element element-2">💻</div>
              <div className="element element-3">🎯</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Why Join Resicode?</h2>
            <p>We believe in creating an environment where talent thrives</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3>Growth & Learning</h3>
              <p>Annual learning budget, certifications, and mentorship programs to help you grow.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚖️</div>
              <h3>Work-Life Balance</h3>
              <p>Flexible hours, remote options, and generous time off to maintain balance.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💼</div>
              <h3>Career Development</h3>
              <p>Clear growth paths, regular reviews, and opportunities for advancement.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎉</div>
              <h3>Great Culture</h3>
              <p>Regular team events, celebrations, and a supportive, inclusive environment.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Competitive Pay</h3>
              <p>Attractive salary packages with performance bonuses and equity options.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏥</div>
              <h3>Health & Wellness</h3>
              <p>Health insurance, mental wellness programs, and fitness allowances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="openings-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Current Openings</h2>
            <p>Find your perfect role in our growing team</p>
          </div>

          {/* Department Tabs */}
          <div className="department-tabs">
            {departments.map(dept => (
              <button
                key={dept.id}
                className={`tab-btn ${activeTab === dept.id ? 'active' : ''}`}
                onClick={() => setActiveTab(dept.id)}
              >
                {dept.name}
                <span className="job-count">{dept.count}</span>
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="job-listings">
            {jobListings.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <div className="job-title-section">
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-tag department">{job.department}</span>
                      <span className="job-tag type">{job.type}</span>
                      <span className="job-tag location">📍 {job.location}</span>
                    </div>
                  </div>
                  <div className="job-experience">
                    <span>Experience: {job.experience}</span>
                    <span className="posted-date">Posted: {job.postedDate}</span>
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
                <div className="job-perks">
                  {job.perks.map((perk, index) => (
                    <span key={index} className="perk-tag">{perk}</span>
                  ))}
                </div>
                <div className="job-actions">
                  <button 
                    className="view-details-btn"
                    onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                  >
                    {selectedJob?.id === job.id ? 'Hide Details' : 'View Details'}
                  </button>
                  <button 
                    className="apply-now-btn"
                    onClick={() => handleApplyClick(job)}
                  >
                    Apply Now
                  </button>
                </div>

                {/* Expanded Job Details */}
                {selectedJob?.id === job.id && (
                  <div className="job-details-expanded">
                    <div className="details-section">
                      <h4>Key Responsibilities</h4>
                      <ul>
                        {job.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="details-section">
                      <h4>Requirements</h4>
                      <ul>
                        {job.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="application-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Apply for {selectedJob?.title}</h2>
              <button 
                className="close-modal"
                onClick={() => setShowApplicationForm(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmitApplication} className="application-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={applicationForm.fullName}
                    onChange={handleFormChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={applicationForm.email}
                    onChange={handleFormChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={applicationForm.phone}
                    onChange={handleFormChange}
                    required
                    placeholder="+91 9876543210"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="experience">Years of Experience *</label>
                  <select
                    id="experience"
                    name="experience"
                    value={applicationForm.experience}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="coverLetter">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={applicationForm.coverLetter}
                    onChange={handleFormChange}
                    rows="4"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="resume">Resume/CV *</label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFormChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <small>PDF, DOC, DOCX (Max 5MB)</small>
                </div>
                <div className="form-group">
                  <label htmlFor="portfolio">Portfolio/GitHub Link</label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={applicationForm.portfolio}
                    onChange={handleFormChange}
                    placeholder="https://github.com/username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="linkedin">LinkedIn Profile</label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={applicationForm.linkedin}
                    onChange={handleFormChange}
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="noticePeriod">Notice Period</label>
                  <select
                    id="noticePeriod"
                    name="noticePeriod"
                    value={applicationForm.noticePeriod}
                    onChange={handleFormChange}
                  >
                    <option value="immediate">Immediate</option>
                    <option value="15">15 days</option>
                    <option value="30">30 days</option>
                    <option value="60">60 days</option>
                    <option value="90">90 days</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="referral">How did you hear about us?</label>
                  <input
                    type="text"
                    id="referral"
                    name="referral"
                    value={applicationForm.referral}
                    onChange={handleFormChange}
                    placeholder="LinkedIn, Indeed, Referral, etc."
                  />
                </div>
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowApplicationForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="submit-application-btn"
                  disabled={isApplying}
                >
                  {isApplying ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hiring Process Section */}
      <section className="process-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Hiring Process</h2>
            <p>Simple, transparent, and respectful</p>
          </div>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Application Review</h3>
              <p>We review your application within 48 hours</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Initial Screening</h3>
              <p>30-minute call with HR to discuss fit</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Technical Assessment</h3>
              <p>Practical assignment or technical interview</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Team Interview</h3>
              <p>Meet with team leads and potential colleagues</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Offer & Onboarding</h3>
              <p>Offer letter and smooth onboarding process</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2>Don't See Your Role?</h2>
            <p>We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.</p>
            <button className="general-application-btn">
              Submit General Application
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Base Styles */
        .careers-page {
          background: #f8fafc;
          color: #1e293b;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
        }

        /* Section Container */
        .section-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .careers-hero {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          color: white;
          padding: 60px 20px;
          width: 100%;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }

        @media (min-width: 1024px) {
          .hero-container {
            flex-direction: row;
            justify-content: space-between;
            gap: 60px;
          }
        }

        .hero-content {
          flex: 1;
          text-align: center;
          max-width: 600px;
        }

        @media (min-width: 1024px) {
          .hero-content {
            text-align: left;
          }
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .highlight {
          color: #fbbf24;
          position: relative;
          display: inline-block;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(251, 191, 36, 0.3);
          z-index: -1;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          margin-bottom: 40px;
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        @media (min-width: 640px) {
          .hero-stats {
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
          }
        }

        @media (min-width: 1024px) {
          .hero-stats {
            margin-top: 60px;
          }
        }

        .stat-item {
          text-align: center;
          padding: 10px;
        }

        .stat-number {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #fbbf24;
          margin-bottom: 8px;
          line-height: 1;
        }

        .stat-label {
          font-size: clamp(0.75rem, 1.5vw, 0.9rem);
          opacity: 0.9;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-illustration {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 400px;
        }

        .floating-elements {
          position: relative;
          width: 250px;
          height: 250px;
        }

        @media (min-width: 640px) {
          .floating-elements {
            width: 300px;
            height: 300px;
          }
        }

        .element {
          position: absolute;
          font-size: 48px;
          animation: float 3s ease-in-out infinite;
        }

        @media (min-width: 640px) {
          .element {
            font-size: 60px;
          }
        }

        .element-1 {
          top: 0;
          left: 30px;
          animation-delay: 0s;
        }

        .element-2 {
          top: 80px;
          right: 10px;
          animation-delay: 0.5s;
        }

        .element-3 {
          bottom: 0;
          left: 80px;
          animation-delay: 1s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* Why Join Section */
        .why-join-section {
          padding: 60px 20px;
          width: 100%;
          background-color: #20185b;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        @media (min-width: 768px) {
          .section-header {
            margin-bottom: 60px;
          }
        }

        .section-header h2 {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
        }

        .section-header p {
          font-size: clamp(1rem, 1.5vw, 1.1rem);
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 20px;
        }

        @media (min-width: 640px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        @media (min-width: 1024px) {
          .benefits-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
        }

        .benefit-card {
          background: white;
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          text-align: center;
          height: 100%;
        }

        @media (min-width: 768px) {
          .benefit-card {
            padding: 30px;
          }
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .benefit-icon {
          font-size: 40px;
          margin-bottom: 15px;
        }

        @media (min-width: 768px) {
          .benefit-icon {
            font-size: 48px;
            margin-bottom: 20px;
          }
        }

        .benefit-card h3 {
          font-size: clamp(1.25rem, 2vw, 1.5rem);
          margin-bottom: 12px;
          color: #1e293b;
        }

        .benefit-card p {
          color: #64748b;
          line-height: 1.5;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
        }

        /* Openings Section */
        .openings-section {
          padding: 60px 20px;
          width: 100%;
          background: white;
          margin-bottom: 60px;
        }

        @media (min-width: 768px) {
          .openings-section {
            margin-bottom: 80px;
          }
        }

        .department-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
          justify-content: center;
        }

        .tab-btn {
          padding: 10px 20px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 50px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: clamp(0.875rem, 1.5vw, 1rem);
          white-space: nowrap;
        }

        .tab-btn.active {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .job-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 20px;
          font-size: 0.8rem;
        }

        .job-listings {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .job-card {
          background: #f8fafc;
          border-radius: 20px;
          padding: 25px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          width: 100%;
        }

        @media (min-width: 768px) {
          .job-card {
            padding: 30px;
          }
        }

        .job-card:hover {
          border-color: #3b82f6;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
        }

        .job-header {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 20px;
        }

        @media (min-width: 768px) {
          .job-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .job-title-section h3 {
          font-size: clamp(1.25rem, 2.5vw, 1.5rem);
          margin-bottom: 10px;
          color: #1e293b;
        }

        .job-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .job-tag {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: clamp(0.75rem, 1vw, 0.85rem);
          font-weight: 600;
        }

        .job-tag.department {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .job-tag.type {
          background: #dcfce7;
          color: #166534;
        }

        .job-tag.location {
          background: #fef3c7;
          color: #92400e;
        }

        .job-experience {
          font-weight: 600;
          color: #475569;
          text-align: left;
        }

        @media (min-width: 768px) {
          .job-experience {
            text-align: right;
          }
        }

        .posted-date {
          display: block;
          font-size: 0.85rem;
          color: #94a3b8;
          margin-top: 5px;
        }

        .job-description {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
        }

        .job-perks {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .perk-tag {
          padding: 6px 16px;
          background: #f1f5f9;
          border-radius: 20px;
          font-size: clamp(0.8rem, 1.2vw, 0.9rem);
          color: #475569;
        }

        .job-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        @media (min-width: 640px) {
          .job-actions {
            flex-direction: row;
            gap: 15px;
          }
        }

        .view-details-btn,
        .apply-now-btn {
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: clamp(0.875rem, 1.5vw, 1rem);
          text-align: center;
          flex: 1;
        }

        .view-details-btn {
          background: transparent;
          border: 2px solid #cbd5e1;
          color: #475569;
        }

        .view-details-btn:hover {
          background: #f1f5f9;
        }

        .apply-now-btn {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
        }

        .apply-now-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }

        .job-details-expanded {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 2px solid #e2e8f0;
        }

        .details-section {
          margin-bottom: 25px;
        }

        .details-section h4 {
          font-size: clamp(1.1rem, 2vw, 1.2rem);
          color: #1e293b;
          margin-bottom: 15px;
        }

        .details-section ul {
          list-style: none;
          padding-left: 20px;
        }

        .details-section li {
          color: #475569;
          margin-bottom: 8px;
          position: relative;
          padding-left: 25px;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
        }

        .details-section li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        /* Application Modal */
        .application-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          background: white;
          border-radius: 20px;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px;
          border-bottom: 2px solid #f1f5f9;
        }

        @media (min-width: 768px) {
          .modal-header {
            padding: 30px;
          }
        }

        .modal-header h2 {
          font-size: clamp(1.25rem, 3vw, 1.8rem);
          color: #1e293b;
        }

        .close-modal {
          background: none;
          border: none;
          font-size: 2rem;
          color: #94a3b8;
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .close-modal:hover {
          background: #f1f5f9;
          color: #475569;
        }

        .application-form {
          padding: 25px;
        }

        @media (min-width: 768px) {
          .application-form {
            padding: 30px;
          }
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        @media (min-width: 640px) {
          .form-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-weight: 600;
          margin-bottom: 8px;
          color: #475569;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-group small {
          margin-top: 5px;
          color: #94a3b8;
          font-size: 0.85rem;
        }

        .form-actions {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding-top: 20px;
          border-top: 2px solid #f1f5f9;
        }

        @media (min-width: 640px) {
          .form-actions {
            flex-direction: row;
            justify-content: flex-end;
          }
        }

        .cancel-btn,
        .submit-application-btn {
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
          text-align: center;
          flex: 1;
        }

        @media (min-width: 640px) {
          .cancel-btn,
          .submit-application-btn {
            flex: 0 0 auto;
            padding: 12px 30px;
          }
        }

        .cancel-btn {
          background: transparent;
          border: 2px solid #cbd5e1;
          color: #475569;
        }

        .cancel-btn:hover {
          background: #f1f5f9;
        }

        .submit-application-btn {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
        }

        .submit-application-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
        }

        .submit-application-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Process Section */
        .process-section {
          padding: 60px 20px;
          width: 100%;
        }

        @media (min-width: 768px) {
          .process-section {
            padding: 80px 20px;
          }
        }

        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 40px;
          position: relative;
          max-width: 1000px;
          margin: 40px auto 0;
        }

        @media (min-width: 768px) {
          .process-steps {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        @media (min-width: 768px) {
          .process-steps::before {
            content: '';
            position: absolute;
            top: 30px;
            left: 10%;
            right: 10%;
            height: 4px;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            z-index: 1;
          }
        }

        .step {
          position: relative;
          z-index: 2;
          text-align: center;
          flex: 1;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: white;
          border: 4px solid #3b82f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #3b82f6;
          margin: 0 auto 20px;
        }

        .step h3 {
          font-size: clamp(1.1rem, 2vw, 1.2rem);
          margin-bottom: 10px;
          color: #1e293b;
        }

        .step p {
          color: #64748b;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          color: white;
          padding: 60px 20px;
          text-align: center;
          width: 100%;
        }

        @media (min-width: 768px) {
          .cta-section {
            padding: 80px 20px;
          }
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          margin-bottom: 20px;
        }

        .cta-content p {
          font-size: clamp(1rem, 1.5vw, 1.1rem);
          opacity: 0.9;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .general-application-btn {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          border: none;
          padding: 14px 32px;
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          font-weight: 600;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          max-width: 300px;
        }

        @media (min-width: 640px) {
          .general-application-btn {
            width: auto;
          }
        }

        .general-application-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(245, 158, 11, 0.3);
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .benefit-card:hover,
          .job-card:hover,
          .apply-now-btn:hover,
          .submit-application-btn:hover,
          .general-application-btn:hover {
            transform: none;
          }
          
          .apply-now-btn:active,
          .submit-application-btn:active,
          .general-application-btn:active {
            transform: scale(0.98);
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .element,
          .benefit-card,
          .job-card,
          .apply-now-btn,
          .submit-application-btn,
          .general-application-btn {
            animation: none;
            transition: none;
          }
        }

        /* Extra Small Devices (≤ 360px) */
        @media (max-width: 360px) {
          .hero-title {
            font-size: 1.75rem;
          }
          
          .hero-subtitle {
            font-size: 0.9rem;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
          
          .benefit-icon {
            font-size: 32px;
          }
          
          .job-card {
            padding: 20px;
          }
        }

        /* Landscape Mode */
        @media (max-height: 500px) and (orientation: landscape) {
          .careers-hero {
            padding: 40px 20px;
          }
          
          .hero-container {
            flex-direction: row;
            gap: 30px;
          }
          
          .hero-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }
          
          .hero-subtitle {
            font-size: 0.9rem;
            margin-bottom: 20px;
          }
          
          .hero-stats {
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default CareersPage;