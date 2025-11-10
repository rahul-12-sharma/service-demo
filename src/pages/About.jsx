import { Link } from "react-router-dom";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function About() {
  return (
    <main className="relative bg-[#050507] text-white overflow-hidden">
      {/* Floating Gradient Lights */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] bg-cyan-500/20 blur-[160px] -top-48 -left-48" />
        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[180px] bottom-0 right-0" />
      </div>

      {/* Floating Back Home Button */}
      <a
        href="/"
        aria-label="Back to Home"
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-cyan-400 to-teal-400 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 hover:shadow-cyan-400/50"
      >
        <AiOutlineHome size={20} />
        <span className="font-semibold text-sm hidden sm:inline">Home</span>
      </a>

      {/* ================= HERO ================= */}
      <section className="relative py-32 px-6 lg:px-12 text-center">
        <div className="relative max-w-6xl mx-auto space-y-8 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] animate-pulse">
            👋 Welcome to DigiFlux Service 
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We empower <span className="text-cyan-300 font-semibold">creators</span>,{" "}
            <span className="text-cyan-300 font-semibold">coaches</span>, and{" "}
            <span className="text-cyan-300 font-semibold">brands</span> to build standout
            digital experiences through creative design, modern development, and AI-powered
            innovation — <strong>fast, reliable, and future-ready.</strong>
          </p>
          <p className="text-sm text-gray-500">📍 Based in India · Serving Clients Worldwide 🌍</p>
        </div>
      </section>

      {/* ================= WHY WORK WITH US ================= */}
      <section className="relative py-28 px-6 lg:px-12 bg-gradient-to-b from-[#0a0a0d] to-[#101016] border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            💡 Why Work With Us
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                desc: "AI-optimized workflows for rapid delivery with precision.",
                color: "from-cyan-400 to-teal-400",
              },
              {
                icon: "💰",
                title: "Affordable",
                desc: "High-end design & tech without high-end pricing.",
                color: "from-green-400 to-emerald-500",
              },
              {
                icon: "🌍",
                title: "Global Standard",
                desc: "Built to perform across all devices and audiences.",
                color: "from-blue-400 to-indigo-500",
              },
              {
                icon: "🧠",
                title: "Fully Managed",
                desc: "We handle everything. You focus on growth.",
                color: "from-purple-400 to-pink-500",
              },
            ].map(({ icon, title, desc, color }, i) => (
              <div
                key={i}
                className={`group relative bg-[#14141a]/80 p-8 rounded-3xl border border-white/10 backdrop-blur-xl transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]`}
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${color} blur-2xl transition-all duration-500 rounded-3xl`}
                ></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-5 group-hover:scale-125 transition-transform duration-300">
                    {icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text">
                    {title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR MISSION ================= */}
      <section className="relative py-28 px-6 lg:px-12 bg-gradient-to-br from-[#0b0b10] via-[#0d0d13] to-[#101019] border-t border-white/10">
        <div className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[130px] top-0 right-0"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text">
            🎯 Our Mission
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            To make digital transformation accessible for everyone — blending human
            creativity and AI intelligence to build brands that not only look good but
            perform exceptionally.
          </p>

          <div className="relative bg-gradient-to-r from-purple-700/30 to-blue-600/20 border border-white/10 rounded-3xl p-10 backdrop-blur-lg shadow-[0_0_50px_rgba(147,51,234,0.2)]">
            <p className="text-gray-200 italic text-lg">
              “We don’t just create designs — we craft digital stories that move people
              and make technology feel human.”
            </p>
          </div>
        </div>
      </section>

      {/* ================= POLICY SECTION ================= */}
      <section className="relative py-28 px-6 lg:px-12 bg-[#0a0a0c] border-t border-white/10">
        <div className="max-w-4xl mx-auto text-gray-300 space-y-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            📜 Our Service Policy
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Transparency, trust, and results — that’s how we do business.
          </p>

          <div className="bg-[#111115]/70 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(56,189,248,0.15)] text-left">
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>
                <strong>Portfolio First:</strong> Explore our work before you decide.
              </li>
              <li>
                <strong>Clear Scope:</strong> We align goals, expectations, and timelines.
              </li>
              <li>
                <strong>Simple Payment:</strong> 30–40% upfront. Work starts after confirmation.
              </li>
              <li>
                <strong>Fair Refunds:</strong> Cancel within 7 days = 70% refund.
              </li>
            </ul>
          </div>

          <p className="text-gray-400">
            Still have questions? Reach out — we’d love to connect 🤝
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-28 px-6 lg:px-12 bg-gradient-to-r from-[#0f0f14] to-[#101017] text-center border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            🚀 Ready to Grow with Us?
          </h3>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Get a free consultation or project sample — no commitments, just results.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full font-medium text-sm bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all"
            >
              📧 Email Us
            </Link>
            <Link
              to="https://wa.me/8745030616"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-medium text-sm bg-gradient-to-r from-green-500 to-emerald-600 flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
