//import React from 'react'
import { Monitor, Code2, Zap, ArrowRight } from "lucide-react";

function About() {
  const features = [
    { 
      icon: <Monitor size={24} />, 
      title: "Frontend Developer", 
      desc: "Building responsive and interactive user interfaces with React and Tailwind CSS." 
    },
    { 
      icon: <Code2 size={24} />, 
      title: "Clean & Modern Design", 
      desc: "I focus on simple, modern and user-friendly designs that convert visitors to users." 
    },
    { 
      icon: <Zap size={24} />, 
      title: "Performance Focused", 
      desc: "I write optimized and clean code for fast loading websites and better UX." 
    },
  ];
  return (
     <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <div>
          <p className="text-blue-600 font-semibold text-sm tracking-wider">ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#0B1120]">About Me</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            I'm a frontend web developer passionate about building beautiful, functional and responsive websites. 
            I enjoy turning ideas into real-world digital experiences and I’m always learning new technologies 
            to stay ahead of the curve.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxed">
            My goal is to create web applications that are not only visually appealing but also fast, 
            accessible, and easy to use.
          </p>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} 
            className="mt-6 border border-gray-300 text-[#0B1120] px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition"
          >
            View My Work <ArrowRight size={16} />
          </button>
        </div>

        {/* RIGHT SIDE - FEATURE CARDS */}
        <div className="grid gap-6">
          {features.map(f => (
            <div key={f.title} className="bg-white p-6 rounded-xl shadow-sm border-gray-100 flex gap-4 hover:shadow-md transition">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg h-fit">
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#0B1120]">{f.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About