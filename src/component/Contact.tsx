//import React from 'react'
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Option 1: Send to WhatsApp with prefilled message
    const whatsappMessage = `Hello Ifesinachi,
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/2347039709102?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");

    // Option 2: Or send via email
    // window.location.href = `mailto:ogbuifesinachi21@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-20">
      <div className="mx-auto text-center">
      <p className="text-teal-400 text-5xl italic font-semibold">CONTACT ME</p>
      <h2 className="text-3xl font-bold mt-2">Get In Touch</h2>
      <p className="text-gray-700 mt-2">Let's build something amazing together</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-8">

        {/* LEFT: CONTACT INFO */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Contact Information</h3>

            <div className="space-y-4 text-gray-700">
              <a href="mailto:ogbuifesinachi21@gmail.com" className="flex items-center gap-3 hover:text-teal-600 transition">
                <Mail className="text-teal-600" size={20} />
                <span>ogbuifesinachi21@gmail.com</span>
              </a>

              <a href="tel:07039709102" className="flex items-center gap-3 hover:text-teal-600 transition">
                <Phone className="text-teal-600" size={20} />
                <span>07039709102</span>
              </a>

              <a
                href="https://wa.me/2347039709102"
                target="_blank"
                className="flex items-center gap-3 hover:text-green-600 transition"
              >
                <FaWhatsapp className="text-green-600" size={20} />
                <span>WhatsApp: +234 703 970 9102</span>
              </a>

              <a
                href="https://facebook.com/share/1DGbC4nPcb/"
                target="_blank"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <FaFacebook className="text-blue-600" size={20} />
                <span>Facebook: Ifesinachi Ogbu</span>
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="text-teal-600" size={20} />
                <span>Anambra State, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-lg mb-2 text-gray-900">Send Me a Message</h3>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none placeholder:text-gray-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none placeholder:text-gray-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none placeholder:text-gray-500"
          />
          <button type="submit" className="gradient-btn w-full py-3 rounded-lg flex items-center justify-center gap-2 text-white font-semibold">
            Send Message <Send size={16} />
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact