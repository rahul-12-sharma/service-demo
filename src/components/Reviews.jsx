import React, { useEffect } from "react";
import { Star, Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const reviews = [
  {
    name: "Sophia Carter",
    role: "CEO • NovaTech",
    comment:
      "Their website development team transformed our online presence. The performance, SEO, and design are absolutely top-notch. Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    name: "Michael Smith",
    role: "Founder • Artix Studio",
    comment:
      "The graphic design work blew our minds! Every visual was crafted with detail and emotion — exactly how we imagined our brand.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    accent: "from-pink-400 to-purple-500",
  },
  {
    name: "Emily Johnson",
    role: "Marketing Lead • DigitalEdge",
    comment:
      "Our digital marketing campaigns have never performed better. They handled SEO, ads, and strategy flawlessly — true professionals!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    accent: "from-yellow-400 to-orange-500",
  },
  {
    name: "Daniel Green",
    role: "Content Creator",
    comment:
      "Their video editing team is outstanding! The final cuts were cinematic, emotionally engaging, and perfectly synced to music. 10/10!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    name: "Ava Williams",
    role: "Freelancer • UX Designer",
    comment:
      "Absolutely loved collaborating with their team! They perfectly captured my vision and brought it to life with stunning visuals and animations.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    accent: "from-teal-400 to-emerald-500",
  },
  {
    name: "Ryan Mitchell",
    role: "Entrepreneur • PixelRise Media",
    comment:
      "The professionalism, creativity, and communication were outstanding. The final result exceeded expectations — definitely coming back for more!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    accent: "from-red-400 to-orange-500",
  },
];

export default function Reviews() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-[#030304] text-white py-28 px-6 overflow-hidden">
      {/* background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(192,132,252,0.15),transparent_70%)] blur-3xl" />

      {/* floating light particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400/30 rounded-full blur-sm animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* header */}
      <div className="relative text-center mb-20">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">
          💬 Client Reviews
        </h2>
        <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Trusted by creators, brands, and innovators — here’s what our clients say about their experience.
        </p>
      </div>

      {/* reviews grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
            className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.1)] hover:shadow-[0_0_45px_rgba(34,211,238,0.3)] hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
          >
            {/* glowing aura */}
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${review.accent} opacity-0 group-hover:opacity-40 blur-2xl transition duration-700`}
            ></div>

            {/* quote icon */}
            <Quote className="absolute top-6 right-6 w-9 h-9 text-cyan-300/40 group-hover:scale-110 transition-all duration-500" />

            {/* profile */}
            <div className="flex items-center gap-4 mb-5 relative z-10">
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 rounded-full border-2 border-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </div>

            {/* comment */}
            <p className="text-gray-300 leading-relaxed text-base relative z-10 italic tracking-wide">
              “{review.comment}”
            </p>

            {/* rating stars */}
            <div className="flex mt-6 text-yellow-400 relative z-10">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* floating blur */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[150px]" />
    </section>
  );
}
