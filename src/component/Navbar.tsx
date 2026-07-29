//import React from 'react'
import { useState } from "react";
import { Code2, Download, Menu, X } from "lucide-react";
function Navbar() {

 const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }
    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg text-[#0B1120]">
          <Code2 className="text-blue-600" size={24} />
          <div>
            OI NEXUS <span className="text-xs font-normal text-gray-500 block leading-none">WEB DEV</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map(l => (
            <button 
              key={l.id} 
              onClick={() => scrollTo(l.id)} 
              className="text-gray-600 hover:text-blue-600 transition"
            >
              {l.name}
            </button>
          ))}
        </div>

        {/* Desktop CV Button */}
        <a 
          href="/cv.pdf" 
          download 
          className="hidden md:flex bg-[#0B1120] text-white px-4 py-2 rounded-lg text-sm font-semibold items-center gap-2 hover:bg-gray-800 transition"
        >
          <Download size={16} /> Download CV
        </a>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 shadow-lg">
          {links.map(l => (
            <button 
              key={l.id} 
              onClick={() => scrollTo(l.id)} 
              className="text-left text-gray-700 hover:text-blue-600 font-medium"
            >
              {l.name}
            </button>
          ))}
          <a 
            href="/cv.pdf" 
            download 
            className="bg-[#0B1120] text-white w-full text-center py-2 rounded-lg mt-2 flex items-center justify-center gap-2 font-semibold"
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      )}
    </nav>
    )
}

export default Navbar