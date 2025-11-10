import React, { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { AiOutlineHome } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "react-phone-number-input/style.css";

function Contact() {
  const [phone, setPhone] = useState("");

  return (
    <main className="relative min-h-screen bg-[#050506] text-white overflow-hidden font-inter">
      {/* ✨ Ambient Background Lights */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-gradient-to-br from-cyan-500/20 to-blue-700/10 rounded-full blur-[150px] -top-40 -left-40 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 to-pink-600/10 rounded-full blur-[140px] bottom-0 right-0 animate-pulse"></div>
      </div>

      {/* 🏠 Floating Home Button */}
      <a
        href="/"
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-cyan-400 to-teal-400 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-110 hover:shadow-cyan-400/50"
        title="Back to Home"
      >
        <AiOutlineHome size={20} />
        <span className="font-semibold text-sm hidden sm:inline">Home</span>
      </a>

      {/* 📬 Contact Section */}
      <section id="contact" className="py-28 px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Let’s Build Something Brilliant 🚀
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Got a project in mind? Let’s collaborate and bring your vision to life — fast, elegant, and effective.
            </p>
          </div>

          {/* Two Columns */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* 🌐 Contact Info */}
            <div className="relative group bg-[#0d0d12]/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.1)] hover:shadow-[0_0_60px_rgba(34,211,238,0.3)] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative z-10 space-y-8">
                <h3 className="text-2xl font-semibold text-cyan-400">👋 Get in Touch</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-cyan-300">Email Us</h4>
                    <p className="text-gray-300">📩 thedigifluxx@gmail.com</p>
                    <p className="text-gray-300">📩 sandilyrahul@gmail.com</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-cyan-300">Follow Us</h4>
                    <div className="flex gap-4 mt-2">
                      <a
                        href="https://www.facebook.com/profile.php?id=61576977687802"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1a1a1f] p-3 rounded-full hover:bg-cyan-500/20 transition-all hover:scale-110"
                      >
                        <FaFacebookF size={18} className="text-blue-500" />
                      </a>
                      <a
                        href="https://www.instagram.com/innoblend.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1a1a1f] p-3 rounded-full hover:bg-pink-500/20 transition-all hover:scale-110"
                      >
                        <FaInstagram size={18} className="text-pink-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 📝 Contact Form */}
            <form
              action="https://formsubmit.co/b957a51b94936fbf47c982f389185097"
              method="POST"
              className="bg-[#101016]/70 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(34,211,238,0.15)] hover:shadow-[0_0_80px_rgba(34,211,238,0.25)] transition-all duration-500"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value="http://localhost:4000/" />

              <div className="space-y-5">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#18181f] text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#18181f] text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />

                {/* 📱 Phone Number Input */}
                <div className="bg-[#18181f] rounded-md border border-white/10 px-4 py-2">
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                    defaultCountry="IN"
                    name="phone"
                    className="text-black rounded-md"
                  />
                </div>

                {typeof phone === "string" &&
                  phone !== "" &&
                  !isValidPhoneNumber(phone) && (
                    <p className="text-red-400 text-sm mt-1">
                      Invalid phone number
                    </p>
                  )}

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-md bg-[#18181f] text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={!phone || !isValidPhoneNumber(phone)}
                  className={`w-full py-3 rounded-md font-semibold text-white text-lg transition-all ${
                    phone && isValidPhoneNumber(phone)
                      ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                      : "bg-gray-700 cursor-not-allowed text-gray-400"
                  }`}
                >
                  Send Message ✨
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
