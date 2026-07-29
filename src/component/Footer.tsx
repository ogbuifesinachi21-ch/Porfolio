//import React from 'react'
import { Code2, ChevronRight, Mail, Phone, MapPin, Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const socials = [
    { name: "GitHub", link: "github.com/ogbuifesinachi21-ch", icon: <FaGithub /> },
    { name: "Facebook", link: "facebook.com/share/1DGbC4nPcb/", icon: <FaFacebook className="text-blue-600" /> },
    { name: "X (Twitter)", link: "x.com/ogbu_ifesinachi", icon: <FaXTwitter /> },
    { name: "WhatsApp", link: "wa.me/2347039709102", icon: <FaWhatsapp className="text-green-500" /> },
    { name: "LinkedIn", link: "linkedin.com/", icon: <FaLinkedin className="text-blue-700" /> },
  ];

  return (
    <footer className="bg-white text-gray-800 pt-16 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-200">

          {/* COLUMN 1: BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 size={32} className="text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">OI NEXUS</h2>
                <p className="text-sm text-blue-600 tracking-widest">WEB DEV</p>
              </div>
            </div>
            <p className="text-gray-600">
              Building responsive and modern web experiences.
            </p>
            <div className="w-12 h-0.5 bg-blue-600 my-4"></div>
            <p className="text-gray-600 text-sm leading-relaxed">
              I build clean, user-friendly and high-performance websites that help brands grow and stand out online.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Quick Links</h3>
            <div className="w-10 h-0.5 bg-blue-600 mb-4"></div>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                  >
                    <ChevronRight size={16} className="text-blue-600" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Contact</h3>
            <div className="w-10 h-0.5 bg-blue-600 mb-4"></div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600" />
                <a href="mailto:ogbuifesinachi21@gmail.com" className="hover:text-blue-600">ogbuifesinachi21@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600" />
                <a href="tel:07039709102" className="hover:text-blue-600">07039709102</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600" />
                <a href="tel:09018536417" className="hover:text-blue-600">09018536417</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-600" />
                <span>Anambra State, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: FOLLOW ME */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Follow Me</h3>
            <div className="w-10 h-0.5 bg-blue-600 mb-4"></div>
            <ul className="space-y-4">
              {socials.map(s => (
                <li key={s.name}>
                  <a href={`https://${s.link}`} target="_blank" className="flex items-center gap-3 group">
                    <div className="bg-gray-100 p-2 rounded-md text-xl group-hover:scale-110 transition text-gray-800">
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{s.name}</p>
                      <p className="text-xs text-gray-500">{s.link}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 flex flex-col md:flex-row justify-center items-center relative">
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <Heart size={16} className="text-blue-600" />
            © 2026 <span className="text-blue-600 font-semibold">OI NEXUS WEB DEV.</span> All Rights Reserved.
          </p>

          {/* BACK TO TOP BUTTON */}
          <button
            onClick={scrollToTop}
            className="absolute right-0 bottom-0 md:bottom-auto flex-col items-center gap-1 group mt-4 md:mt-0"
          >
            <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition group-hover:-translate-y-1">
              <ArrowUp size={20} />
            </div>
            <span className="text-xs text-gray-700">Back to Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer