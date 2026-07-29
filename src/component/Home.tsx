//import React from 'react'
import { ArrowRight, Mail, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import profilr from '../assets/profile.jpeg'

function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  return (
      <section id="home" className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <div>
          <p className="text-blue-600 font-semibold text-sm">Hello, I'm</p>
          
          <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight text-[#0B1120]">
            Ogbu Ifesinachi <br />
            <span className="text-blue-600">Frontend</span> Web Developer
          </h1>

          <p className="text-gray-600 mt-4 max-w-lg">
            I build responsive, user-friendly and modern websites with clean code and great attention to detail.
          </p>
          
          {/* BUTTONS */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <button 
              onClick={() => scrollTo('projects')} 
              className="bg-[#0B1120] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-800 transition shadow-md"
            >
              View Projects <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="border border-gray-300 text-[#0B1120] px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-50 transition"
            >
              Contact Me <Mail size={18} />
            </button>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-5 mt-10">
            <a href="https://github.com/ogbuifesinachi21-ch" target="_blank" className="text-gray-500 hover:text-blue-600 transition">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" className="text-gray-500 hover:text-blue-600 transition">
              <FaLinkedin size={22} />
            </a>
            <a href="https://x.com/ogbu_ifesinachi" target="_blank" className="text-gray-500 hover:text-blue-600 transition">
              <FaTwitter size={22} />
            </a>
            <a href="mailto:ogbuifesinachi21@gmail.com" className="text-gray-500 hover:text-blue-600 transition">
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE + BADGE */}
        <div className="relative flex justify-center">
          <img 
            src={profilr} 
            alt="Ogbu Ifesinachi" 
            className="rounded-2xl w-full max-w-sm object-cover shadow-xl border-gray-100" 
          />
          
          {/* Floating Badge */}
          <div className="absolute -bottom-10 left-4 md:left-8 bg-white shadow-lg rounded-lg px-4 py-3 flex items-center gap-3 border-gray-100">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Code2 className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="font-semibold text-sm text-[#0B1120]">Clean Code</p>
              <p className="text-xs text-gray-500">Pixel Perfect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home