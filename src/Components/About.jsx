import React from 'react';
import { FaRocket, FaGem, FaHandshake, FaBolt } from "react-icons/fa";
import web_dev from './Logos/web_dev.png';
import commer from './Logos/E-commer.png';
import web_app from './Logos/webapp.png';
import ui from './Logos/ui.png';
import seo from './Logos/seo.png';
import custom from './Logos/custom.png';
import wasim from './Logos/wasim.jpg';
import devesh from './Logos/devesh.jpg';
import rishbh from './Logos/rishabh.jpg';
const AboutUs = () => {
  const teamMembers = [
  {
    id: 1,
    name: "Wasim Sheikh",
    position: "Chairman & CEO",
    image: wasim,
    description: "Strategic Vision & Business Development Leader with expertise in technology strategy and innovation.",
    skills: ["Technology Strategy", "System Architecture", "Leadership", "Product Vision", "Innovation"]
  },
  {
    id: 2,
    name: "Devesh Wadibhasme",
    position: "CTO & Lead Developer",
    image: devesh,
    description: "Full-stack development expert specializing in scalable architecture and backend systems.",
    skills: ["Node.js", "System Architecture", "API Development", "DevOps", "Database Design"]
  },
  {
    id: 3,
    name: "Rishabh Nandankar",
    position: "Frontend Lead & UI/UX Director",
    image: rishbh,
    description: "Creating beautiful, responsive user interfaces with focus on user experience and modern design.",
    skills: ["React", "UI/UX Design", "Next.js", "Tailwind CSS", "Frontend Architecture"]
  }
];

console.log(teamMembers);

  const values = [
  {
    icon: FaRocket,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies"
  },
  {
    icon: FaGem,
    title: "Quality",
    description: "Excellence is our standard in every project we deliver"
  },
  {
    icon: FaHandshake,
    title: "Collaboration",
    description: "We believe in teamwork and strong client partnerships"
  },
  {
    icon: FaBolt,
    title: "Efficiency",
    description: "Delivering results faster without compromising quality"
  }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About RESICODE</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
           Resicode is a web development service-based company dedicated to creating scalable, modern, and user-friendly digital solutions for businesses worldwide.
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
                Founded in 2025, Resicode emerged from a simple yet powerful vision: to bridge the gap 
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

    <h3 className="text-2xl font-bold mb-6 text-center">
      Our Long Term Vision with Timeline
    </h3>

    <div className="space-y-6">

      {/* 2024 */}
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center">
          <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm">
            2024
          </span>
          <span className="w-px h-full bg-white/40 mt-2"></span>
        </div>
        <div>
          <h4 className="text-lg font-bold">Foundation</h4>
          <p className="text-white/90">
            Resicode was born with a vision to simplify technology for businesses.
          </p>
        </div>
      </div>

      {/* 2025 - Breakthrough */}
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center">
          <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm">
            2025
          </span>
          <span className="w-px h-full bg-white/40 mt-2"></span>
        </div>
        <div>
          <h4 className="text-lg font-bold">First Breakthrough</h4>
          <p className="text-white/90">
            Delivered 5+ successful projects with 100% client satisfaction.
          </p>
        </div>
      </div>

      {/* 2025 - Expansion */}
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center">
          <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm">
            2025
          </span>
        </div>
        <div>
          <h4 className="text-lg font-bold">Expansion</h4>
          <p className="text-white/90">
            Expanding our team and starting to serve Indian and international clients.
          </p>
        </div>
      </div>

      {/* 2026 */}
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center">
          <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm">
            2026
          </span>
        </div>
        <div>
          <h4 className="text-lg font-bold">Innovation</h4>
          <p className="text-white/90">
            Introducing AI-powered solutions and advanced web technologies for businesses.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

          </div>
        </div>
      </section>
      {/* Purpose Section */}
<div className="py-20 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
  <div className="max-w-5xl mx-auto text-center">

    {/* Quote Icon */}
    <div className="text-6xl text-[#FBDB57] mb-6">“</div>

    {/* Purpose Text */}
    <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
      Our purpose is simple: to make technology accessible and empower businesses
      to thrive in the digital world through innovative web solutions.
    </p>

    {/* Divider */}
    <div className="w-24 h-1 bg-gradient-to-r from-[#F45DA2] to-[#FBDB57] mx-auto my-8 rounded-full"></div>

    {/* Author */}
    <p className="text-lg text-gray-300 font-semibold tracking-wide">
      — Resicode Team
    </p>

  </div>
</div>


      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {values.map((item, index) => {
    const Icon = item.icon;
    return (
      <div
        key={index}
        className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
      >
        <Icon className="text-4xl text-[#FBDB57] mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-gray-400">{item.description}</p>
      </div>
    );
  })}
</div>

        </div>
      </section>
      {/* what we do */}
<section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        What We Do
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Delivering innovative, scalable, and result-driven digital solutions
        tailored for modern businesses.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {/* Card */}
      <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="w-14 h-14 flex items-center justify-center rounded-xl
          bg-gradient-to-br from-pink-500 to-purple-600 mb-6">
          <img src={web_dev} alt="Web Development" className="w-7 h-7"/>
        </div>

        <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Custom websites built with modern technologies for optimal performance,
          responsiveness, and user experience.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Responsive</span>
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Fast</span>
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">SEO Ready</span>
        </div>
      </div>

      {/* Card */}
      <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="w-14 h-14 flex items-center justify-center rounded-xl
          bg-gradient-to-br from-yellow-400 to-orange-500 mb-6">
          <img src={commer} alt="E-commerce" className="w-7 h-7"/>
        </div>

        <h3 className="text-2xl font-semibold mb-3">E-commerce Solutions</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Complete online stores with secure payment gateways, inventory
          management, and seamless shopping experiences.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Payments</span>
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Inventory</span>
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Secure</span>
        </div>
      </div>

      {/* Card */}
      <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="w-14 h-14 flex items-center justify-center rounded-xl
          bg-gradient-to-br from-cyan-400 to-blue-500 mb-6">
          <img src={web_app} alt="Web Apps" className="w-7 h-7"/>
        </div>

        <h3 className="text-2xl font-semibold mb-3">Web Applications</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Scalable web applications with real-time features, robust backend
          systems, and API integrations.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Scalable</span>
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Real-time</span>
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">API</span>
        </div>
      </div>

      {/* UI/UX */}
      <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="w-14 h-14 flex items-center justify-center rounded-xl
          bg-gradient-to-br from-indigo-500 to-purple-500 mb-6">
          <img src={ui} alt="UI UX" className="w-7 h-7"/>
        </div>

        <h3 className="text-2xl font-semibold mb-3">UI/UX Design</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Human-centered designs that create intuitive, engaging experiences and
          increase conversions.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Research</span>
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Wireframes</span>
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Prototypes</span>
        </div>
      </div>

      {/* SEO */}
      <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="w-14 h-14 flex items-center justify-center rounded-xl
          bg-gradient-to-br from-green-400 to-emerald-500 mb-6">
          <img src={seo} alt="SEO" className="w-7 h-7"/>
        </div>

        <h3 className="text-2xl font-semibold mb-3">SEO & Maintenance</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Continuous optimization, security updates, and performance monitoring
          to keep your website running at peak performance.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">SEO</span>
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Security</span>
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Monitoring</span>
        </div>
      </div>

      {/* Custom */}
      <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="w-14 h-14 flex items-center justify-center rounded-xl
          bg-gradient-to-br from-red-400 to-pink-500 mb-6">
          <img src={custom} alt="Custom Solutions" className="w-7 h-7"/>
        </div>

        <h3 className="text-2xl font-semibold mb-3">Custom Solutions</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Tailored software solutions designed to match your business workflows
          and unique requirements.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Custom Software</span>
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">API Development</span>
          <span className="px-3 py-1 text-sm rounded-full bg-white/10">Integration</span>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* Team Section */}
     {/* Updated Team Section */}
<section className="py-20 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
      <p className="text-lg text-blue-200 max-w-3xl mx-auto">
        The visionary leaders driving RESICODE's innovation and growth
      </p>
    </div>

    {/* Team Grid - Updated with all 3 members */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Wasim Sheikh */}
      <div className="bg-gray-800 rounded-2xl p-8 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex justify-center mb-6">
          <img
            src={wasim}
            alt="Wasim Sheikh"
            className="w-32 h-32 rounded-full object-cover border-4 border-[#FBDB57] shadow-lg"
          />
        </div>
        <h3 className="text-2xl font-bold mb-1">Wasim Sheikh</h3>
        <p className="text-[#F45DA2] font-semibold mb-3">Chairman & CEO</p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Strategic Vision & Business Development Leader with expertise in technology strategy and innovation.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["Technology Strategy", "System Architecture", "Leadership", "Product Vision", "Innovation"].map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-200 hover:bg-[#FBDB57] hover:text-black transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Devesh Wadibhasme */}
      <div className="bg-gray-800 rounded-2xl p-8 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex justify-center mb-6">
          <img
            src={devesh}
            alt="Devesh Wadibhasme"
            className="w-32 h-32 rounded-full object-cover border-4 border-[#F45DA2] shadow-lg"
          />
        </div>
        <h3 className="text-2xl font-bold mb-1">Devesh Wadibhasme</h3>
        <p className="text-[#45CFFF] font-semibold mb-3">Full Stack Developer</p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Full-stack development expert specializing in scalable architecture and backend systems.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["Node.js", "System Architecture", "API Development", "DevOps", "Database Design"].map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-200 hover:bg-[#45CFFF] hover:text-black transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Rishabh Nandankar */}
      <div className="bg-gray-800 rounded-2xl p-8 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex justify-center mb-6">
          <img
            src={rishbh}
            alt="Rishabh Nandankar"
            className="w-32 h-32 rounded-full object-cover border-4 border-[#FBDB57] shadow-lg"
          />
        </div>
        <h3 className="text-2xl font-bold mb-1">Rishabh Nandankar</h3>
        <p className="text-[#F45DA2] font-semibold mb-3">Frontend Lead & UI/UX Designer</p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Creating beautiful, responsive user interfaces with focus on user experience and modern design.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["React", "UI/UX Design", "Next.js", "Tailwind CSS", "Frontend Architecture"].map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-200 hover:bg-[#FBDB57] hover:text-black transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Team Stats */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center p-6 bg-gray-800 rounded-xl">
        <div className="text-3xl font-bold text-[#FBDB57] mb-2">3+</div>
        <div className="text-gray-300">Years Experience</div>
      </div>
      <div className="text-center p-6 bg-gray-800 rounded-xl">
        <div className="text-3xl font-bold text-[#FBDB57] mb-2">10+</div>
        <div className="text-gray-300">Projects Completed</div>
      </div>
      <div className="text-center p-6 bg-gray-800 rounded-xl">
        <div className="text-3xl font-bold text-[#FBDB57] mb-2">100%</div>
        <div className="text-gray-300">Client Satisfaction</div>
      </div>
      <div className="text-center p-6 bg-gray-800 rounded-xl">
        <div className="text-3xl font-bold text-[#FBDB57] mb-2">10+</div>
        <div className="text-gray-300">Happy Clients</div>
      </div>
    </div>
  </div>
</section>
      {/* Timeline Section */}
      <section className="py-20 bg-gray-950 text-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Why Choose <span className="text-[#FBDB57]">Resicode</span>?
      </h2>
      <p className="text-lg text-gray-400 max-w-3xl mx-auto">
        We don't just build websites — we build powerful digital solutions that
        help your business grow and succeed in the digital world.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          icon: "🏆",
          title: "Proven Experience",
          desc: "With 3+ years and 50+ successful projects, we bring proven expertise to every engagement."
        },
        {
          icon: "💎",
          title: "Quality First",
          desc: "We never compromise on quality. Every project undergoes rigorous testing and quality assurance."
        },
        {
          icon: "🕒",
          title: "24/7 Support",
          desc: "Round-the-clock support ensures your business never faces downtime or technical issues alone."
        },
        {
          icon: "⚡",
          title: "Cutting-Edge Innovation",
          desc: "We stay ahead of technology trends to deliver future-proof solutions that give you a competitive edge."
        },
        {
          icon: "🎯",
          title: "Tailored Solutions",
          desc: "Every project is customized to your unique business needs, goals, and target audience."
        },
        {
          icon: "📈",
          title: "Results-Driven Approach",
          desc: "We focus on delivering measurable results that directly contribute to your business growth."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8
                     hover:-translate-y-2 hover:shadow-2xl transition duration-300"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-3 text-[#F45DA2]">
            {item.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

    {/* CTA Section */}
    <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600
                    rounded-2xl p-10 shadow-xl">
      <h3 className="text-3xl font-bold mb-4">
        Ready to Experience the Resicode Difference?
      </h3>
      <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
        Join <span className="font-semibold text-yellow-300">10+ satisfied clients</span> who have
        transformed their digital presence with our expert solutions.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg
                           hover:bg-yellow-300 transition">
          Start Your Project
        </button>
        <button className="px-8 py-3 border border-white rounded-lg
                           hover:bg-white hover:text-black transition">
          View Case Studies
        </button>
      </div>
    </div>

  </div>
</section>


      {/* CTA Section */}
    </div>
  );
};

export default AboutUs;