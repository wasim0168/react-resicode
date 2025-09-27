import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO & Founder",
      image: "👨‍💼",
      description: "Visionary leader with 10+ years in tech industry",
      skills: ["Leadership", "Strategy", "Innovation"]
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CTO",
      image: "👩‍💻",
      description: "Tech expert specializing in cutting-edge solutions",
      skills: ["React", "Node.js", "AI/ML"]
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Lead Developer",
      image: "👨‍🔧",
      description: "Full-stack developer with passion for clean code",
      skills: ["JavaScript", "Python", "DevOps"]
    },
    {
      id: 4,
      name: "Sarah Wilson",
      position: "UI/UX Designer",
      image: "👩‍🎨",
      description: "Creative designer focused on user experience",
      skills: ["Figma", "Adobe Suite", "Prototyping"]
    }
  ];

  const milestones = [
    { year: "2020", event: "Company Founded", description: "Started with a vision to transform digital solutions" },
    { year: "2021", event: "First 100 Clients", description: "Reached milestone of serving 100+ satisfied clients" },
    { year: "2022", event: "Team Expansion", description: "Grew to 20+ talented professionals" },
    { year: "2023", event: "Award Winning", description: "Received 'Best Tech Company' award" },
    { year: "2024", event: "Global Reach", description: "Expanded services to 10+ countries" }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies"
    },
    {
      icon: "💎",
      title: "Quality",
      description: "Excellence is our standard in every project we deliver"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We believe in teamwork and strong client partnerships"
    },
    {
      icon: "⚡",
      title: "Efficiency",
      description: "Delivering results faster without compromising quality"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Resicode</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Transforming ideas into digital reality through innovation, expertise, and passion.
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2020, Resicode emerged from a simple yet powerful vision: to bridge the gap 
                between innovative ideas and their digital realization. What started as a small team of 
                passionate developers has grown into a full-service digital agency serving clients worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe that technology should be accessible, understandable, and transformative. 
                Our journey has been marked by countless success stories, challenging projects, and 
                meaningful relationships with clients who have become partners in innovation.
              </p>
              <div className="flex space-x-4">
                <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
                  Our Portfolio
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>10+ Years Combined Experience</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>100+ Successful Projects</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>24/7 Customer Support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>Cutting-edge Technology Stack</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>Competitive Pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-blue-200">The brilliant minds behind our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-gray-800 rounded-xl p-6 text-center transform hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-yellow-400 mb-3">{member.position}</p>
                <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, index) => (
                    <span key={index} className="bg-gray-700 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped our growth</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-400 h-full"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2">{milestone.year}</h3>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-400 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's collaborate to bring your ideas to life with cutting-edge technology and creative solutions.
          </p>
          <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;