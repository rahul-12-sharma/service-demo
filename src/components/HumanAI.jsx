import React, { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: '⚙️',
    title: 'Efficiency',
    desc: 'AI speeds up tasks by 40% for faster delivery.',
    percent: 50,
    color: '#22d3ee',
  },
  {
    icon: '🎨',
    title: 'Creativity',
    desc: 'AI fuels fresh ideas with human direction.',
    percent: 70,
    color: '#8b5cf6',
  },
  {
    icon: '📊',
    title: 'Insights',
    desc: 'AI analytics guide performance optimization.',
    percent: 65,
    color: '#facc15',
  },
  {
    icon: '💸',
    title: 'Cost-Effective',
    desc: 'Great results without high costs.',
    percent: 55,
    color: '#10b981',
  },
];

// Circle progress component with scroll animation
function CircleProgress({ percent, color }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const circleRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const strokeDashoffset = circumference - (circumference * percent) / 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (circleRef.current) observer.observe(circleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={circleRef}
      className="transform -rotate-90"
      width="110"
      height="110"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="10"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke={color}
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={visible ? strokeDashoffset : circumference}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.77, 0, 0.175, 1)' }}
      />
      <text
        x="50"
        y="57"
        textAnchor="middle"
        fill={color}
        fontWeight="700"
        fontSize="18"
        fontFamily="Inter, sans-serif"
      >
        {percent}%
      </text>
    </svg>
  );
}

export default function HumanAI() {
  return (
    <section className="relative text-white py-28 px-6 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://cdn.pixabay.com/video/2024/11/24/243046_tiny.mp4" type="video/mp4" />
      </video>

      {/* Overlay with gradient and glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-cyan-950/40 z-10" />

      {/* Decorative gradient blobs */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full top-[-150px] left-[-150px] z-0" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full bottom-[-100px] right-[-100px] z-0" />

      {/* Heading and description */}
      <div className="relative z-20 max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">
          Human + AI = Smarter Solution
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Experience the perfect synergy of human creativity and AI precision — where ideas meet intelligence.
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="relative z-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map(({ icon, title, desc, percent, color }, idx) => (
          <div
            key={idx}
            className="group relative bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-lg hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center space-y-6"
          >
            <div className="relative">
              <div className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-tr from-cyan-400 via-blue-400 to-purple-400 rounded-full scale-110 group-hover:opacity-60 transition-opacity duration-500" />
              <CircleProgress percent={percent} color={color} />
            </div>

            <div
              className="text-5xl transition-transform duration-500 group-hover:scale-125"
              style={{ color }}
              aria-label={title}
              role="img"
            >
              {icon}
            </div>

            <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {title}
            </h3>
            <p className="text-gray-300 text-center text-base leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
