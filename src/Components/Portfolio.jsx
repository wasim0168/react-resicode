import React from "react";
import { FiExternalLink } from "react-icons/fi";

const stats = [
  { icon: "", value: "10+", label: "Projects Completed" },
  { icon: "", value: "98%", label: "Client Satisfaction" },
  { icon: "", value: "3+", label: "Years Experience" },
  { icon: "", value: "7+", label: "Happy Clients" },
];

const industries = [
  { icon: "", name: "E-commerce" },
  { icon: "", name: "Healthcare" },
  { icon: "", name: "Education" },
  { icon: "", name: "Technology" },
  { icon: "", name: "Real Estate" },
  { icon: "", name: "Food & Beverage" },
];

const projects = [
  {
    title: "A Trading Website For Ather Trading",
    industry: "Wholeseller of Solar Panel",
    client: "Ather Traders",
    duration: "2 months",
    team: "2 developers",
    tech: ["HTML & CSS", "Tailwind CSS", "Swiper.js", "Google Maps", "HSTS Security", "CDN Links"],
  },
  {
    title: "Healthcare Management System for MedCare",
    industry: "Healthcare",
    client: "MedCare Hospitals",
    duration: "5 months",
    team: "6 developers",
    tech: ["React & TypeScript", "Django", "PostgreSQL", "WebRTC", "HIPAA Compliance", "Real-time Updates"],
  },
  {
    title: "Learning Management System for EduTech Pro",
    industry: "Education",
    client: "EduTech Pro",
    duration: "4 months",
    team: "5 developers",
    tech: ["Next.js", "Tailwind", "Firebase", "Video Streaming", "Analytics", "Certificates"],
  },
  {
    title: "Real Estate Portal for PrimeProperties",
    industry: "Real Estate",
    client: "PrimeProperties",
    duration: "3 months",
    team: "4 developers",
    tech: ["Vue.js", "Laravel", "Google Maps API", "Virtual Tours", "CRM Integration"],
  },
  {
    title: "Food Delivery App for QuickBites",
    industry: "Food & Beverage",
    client: "QuickBites",
    duration: "6 months",
    team: "8 developers",
    tech: ["React Native", "Node.js", "MongoDB Atlas", "Real-time Tracking", "AI Recommendations"],
  },
  {
    title: "Corporate Website for TechInnovate",
    industry: "Technology",
    client: "TechInnovate Solutions",
    duration: "2 months",
    team: "3 developers",
    tech: ["Next.js", "Headless CMS", "SEO Optimized", "A/B Testing", "Fast Loading"],
  },
];

export default function Portfolio() {
  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Portfolio & Our Work
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            At Resicode, we have worked with businesses across industries to deliver
            powerful, scalable, and user-friendly web solutions.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-xl p-6 text-center hover:-translate-y-2 transition"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-yellow-400">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* INDUSTRIES */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Industries We Serve
          </h2>
         <div className="relative overflow-hidden w-full">
  <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
    {[...industries, ...industries].map((item, i) => (
      <div
        key={i}
        className="min-w-[160px] bg-gray-900 rounded-lg p-4 text-center 
                   hover:bg-gray-800 transition shrink-0"
      >
        <div className="text-3xl mb-2">{item.icon}</div>
        <p className="text-sm text-gray-300 font-bold">{item.name}</p>
      </div>
    ))}
  </div>
</div>

        </div>

        {/* PROJECTS */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Explore our recent work across various industries.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-xl p-6 hover:-translate-y-2 transition-all hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-yellow-400 text-sm mb-2">
                  {project.industry}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  Client: {project.client}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  <span>⏱️ {project.duration}</span>
                  <span>👥 {project.team}</span>
                </div>

                <button className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition">
                  Live Demo <FiExternalLink />
                </button>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
      @keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

    `}</style>

      </div>
    </section>
  );
}
