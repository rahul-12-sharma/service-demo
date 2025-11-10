import React, { useState } from "react";

// Sample portfolio data
const portfolioItems = [
  { id: 1, category: "Digital Marketing", title: "Social Media Campaign", img: "https://static.vecteezy.com/system/resources/previews/011/019/587/original/social-media-and-digital-marketing-3d-illustration-png.png" },
  { id: 2, category: "Video Editing", title: "Promo Video", img: "https://static-cse.canva.com/blob/902119/create_Promo-video-maker_how-to2x.jpg" },
  { id: 3, category: "Web Development", title: "E-commerce Website", img: "https://yi-files.yellowimages.com/products/1705000/1705868/2731839-full.jpg" },
  { id: 4, category: "Graphic Design", title: "Logo Design", img: "https://bonafideshops.com/wp-content/uploads/2020/12/LogoCollection.jpg" },
  { id: 5, category: "Digital Marketing", title: "Email Marketing", img: "https://thebrandhopper.com/wp-content/uploads/2022/12/email-marketing-strategy.jpg" },
  { id: 6, category: "Video Editing", title: "YouTube Video", img: "https://blog.trint.com/hs-fs/hubfs/A%20list%20of%20the%20best%20video%20editing%20software%20for%20beginners.jpg?width=5760&name=A%20list%20of%20the%20best%20video%20editing%20software%20for%20beginners.jpg" },
];

const categories = ["All", "Digital Marketing", "Video Editing", "Web Development", "Graphic Design"];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
          Our Portfolio
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <aside className="md:w-1/4 bg-white shadow-xl rounded-3xl p-6 sticky top-24 h-fit">
            <h3 className="text-xl font-bold mb-5 text-gray-800">Services</h3>
            <ul className="space-y-3">
              {categories.map(category => (
                <li
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`cursor-pointer px-5 py-3 rounded-xl text-center font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white shadow-lg scale-105"
                      : "bg-gray-100 hover:bg-gradient-to-r hover:from-red-400 hover:via-pink-400 hover:to-purple-400 hover:text-white"
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </aside>

          {/* Portfolio Grid */}
          <div className="md:w-3/4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="relative rounded-3xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer"
              >
                <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-sm">{item.category}</p>
                    <button className="mt-3 px-4 py-2 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full text-white font-semibold hover:scale-105 transition-transform">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
