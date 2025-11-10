import React from "react";
import { Link } from "react-router-dom";
import { Code, Brush, Megaphone, Film } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    description:
      "Lightning-fast, responsive, and SEO-optimized websites built with modern frameworks for next-gen digital experiences.",
    tools: ["Next.js", "Shopify", "WordPress", "AI Builder"],
    image: "https://services-nine-chi.vercel.app/assets/website.png",
    link: "/website",
    icon: <Code className="w-10 h-10 text-cyan-400" />,
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Graphic Design",
    description:
      "Designs that speak louder than words — crafted visuals and identities that connect emotionally with your audience.",
    tools: ["Photoshop", "Illustrator", "Figma"],
    image: "https://services-nine-chi.vercel.app/assets/graphic.png",
    link: "/graphic",
    icon: <Brush className="w-10 h-10 text-pink-400" />,
    accent: "from-pink-400 to-purple-500",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow faster with powerful marketing strategies combining SEO, analytics, and high-impact ad campaigns.",
    tools: ["Google Ads", "Meta Ads", "Social Media", "SEO"],
    image: "https://diggitymarketing.com/wp-content/uploads/2020/04/digital-marketing-illustration-lighting-969x600.jpg",
    link: "/marketing",
    icon: <Megaphone className="w-10 h-10 text-yellow-400" />,
    accent: "from-yellow-400 to-orange-500",
  },
  {
    title: "Video Editing",
    description:
      "Transform footage into cinematic stories that captivate audiences and elevate your brand presence.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    image: "https://services-nine-chi.vercel.app/assets/video.png",
    link: "/video",
    icon: <Film className="w-10 h-10 text-purple-400" />,
    accent: "from-purple-400 to-indigo-500",
  },
];

export default function Services() {
  return (
    <section className="relative bg-gray-900 text-white py-28 px-6 overflow-hidden">
      {/* Background floating neon glows */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-500/30 to-blue-500/10 rounded-full blur-[180px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-pink-500/30 to-purple-500/10 rounded-full blur-[180px] animate-pulse-slow" />

      {/* Section Header */}
      <h2 className="relative text-center text-5xl sm:text-6xl md:text-7xl font-extrabold mb-24 tracking-tight">
        <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(34,211,238,0.7)] animate-pulse-slow">
          🧩 Our Services
        </span>
      </h2>

      <div className="relative z-10 flex flex-col gap-28 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className={`group perspective-1000 flex flex-col md:flex-row ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 md:gap-16`}
          >
            {/* Image Section with 3D tilt */}
            <motion.div
              className="relative w-full md:w-1/2 overflow-hidden rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.2)] border border-transparent group-hover:border-white/30 transition-all duration-500"
              whileHover={{ rotateY: idx % 2 === 0 ? 10 : -10, rotateX: 5, scale: 1.05 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full max-h-[440px] object-cover rounded-3xl transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
              {/* Neon overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${service.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl`}
              />
            </motion.div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
              <motion.div
                className="flex items-center justify-center md:justify-start gap-4"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  {service.icon}
                </motion.div>

                <h3
                  className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${service.accent} text-transparent bg-clip-text group-hover:underline-offset-4 underline decoration-2 underline-white/30 transition-all duration-300`}
                >
                  {service.title}
                </h3>
              </motion.div>

              <p className="text-gray-300 text-lg leading-relaxed tracking-wide max-w-lg mx-auto md:mx-0">
                {service.description}
              </p>

              {/* Tools */}
              <ul className="flex flex-wrap justify-center md:justify-start gap-3">
                {service.tools.map((tool, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    className="bg-white/10 px-4 py-2 rounded-full text-white/90 border border-white/10 text-sm backdrop-blur-sm hover:bg-gradient-to-r hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 cursor-pointer"
                  >
                    {tool}
                  </motion.li>
                ))}
              </ul>

              {/* Button */}
              <Link
                to={service.link}
                className={`inline-block mt-6 px-10 py-3 rounded-full font-semibold text-lg bg-gradient-to-r ${service.accent} text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] hover:-translate-y-1 transition-all duration-300`}
              >
                Explore →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
