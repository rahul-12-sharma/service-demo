import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jpj3uh8",
        "template_eiq6tge",
        form.current,
        "SX3BenaUsSEL-tN_W"
      )
      .then(
        () => {
          form.current.reset();
          setStatus("success");
          setTimeout(() => setStatus(null), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(null), 4000);
        }
      );
  };

  return (
    <footer className="relative text-white overflow-hidden bg-[#030304]">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.55,22,98.09,29.05,147.75,17C230.5,43,304,4.14,389,1.23c70.75-2.45,136.57,22.1,205.26,36.17C681.8,56.16,750.91,52.69,819,37.83c79.51-17.4,157-45.2,236-48.19V0Z"
            fill="url(#gradient)"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[50%] h-[60%] bg-cyan-500/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[50%] h-[60%] bg-purple-500/10 blur-[100px] animate-pulse delay-700"></div>
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-red-500 rounded-full blur-[1px] animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-24 space-y-16">
        {/* Header / Branding */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8">
          <div className="flex items-center gap-4 group relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-25 blur-3xl rounded-full group-hover:opacity-50 transition duration-700"></div>
            <svg
              width="52"
              height="52"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
            >
              <circle cx="32" cy="32" r="30" stroke="#06b6d4" strokeWidth="4" />
              <path
                d="M20 32c0-6 5-11 11-11s11 5 11 11-5 11-11 11"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              DigiFlux Service
            </h2>
          </div>
          <p className="text-gray-400 text-center sm:text-left max-w-md text-lg leading-relaxed">
            <span className="text-cyan-400 font-semibold">Innovate smarter.</span>  
            Blending Human Creativity + AI Precision for your brand’s next evolution.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-cyan-400 mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Website Development",
                "Graphic Design",
                "Digital Marketing",
                "Video Editing",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 hover:text-white transition-all"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-cyan-400 mb-6">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="mailto:thedigifluxx@gmail.com"
                  className="hover:text-white flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400" />
                  thedigifluxx@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:sandilyrahul@gmail.com"
                  className="hover:text-white flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400" />
                  sandilyrahul@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918745030616"
                  className="hover:text-white flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-emerald-400" />
                  +91-98889-87479
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-cyan-400 mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="/about" className="hover:text-white transition">Policy</a></li>
              <li className="flex items-center gap-2">
                <span>Exciting Updates Soon</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-xl font-semibold text-cyan-400 mb-6">Subscribe</h4>
            <p className="text-sm text-gray-400 mb-4">
              Stay ahead with updates, tips & exclusive AI-powered insights.
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 hover:from-teal-400 hover:to-cyan-400 font-semibold text-black shadow-lg hover:scale-105 transition-transform"
              >
                Subscribe
              </button>
            </form>

            {status === "success" && (
              <p className="mt-3 text-green-400 font-semibold animate-pulse">
                ✅ Thank you for subscribing!
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-red-400 font-semibold animate-pulse">
                ❌ Something went wrong!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-10 mt-10 gap-6">
          <p className="text-sm text-gray-500">
            © 2025 <span className="text-cyan-400 font-semibold">DigiFlux</span> — Crafted with 💙 & AI.
          </p>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.facebook.com/profile.php?id=61576977687802"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 hover:scale-125 transition-transform"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/innoblend.ai/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 hover:scale-125 transition-transform"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://wa.me/8745030616"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 hover:scale-125 transition-transform"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
