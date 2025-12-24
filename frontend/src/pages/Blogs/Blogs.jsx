import React from "react";
import image3 from "../../assets/AboutUs-Image/image13.jpg";
import image1 from "../../assets/BlogImage/image1.png";
import image2 from "../../assets/BlogImage/image2.jpg";
import image4 from "../../assets/BlogImage/image3.jpg";
import image5 from "../../assets/BlogImage/image5.jpg";
import image6 from "../../assets/BlogImage/image6.jpg";
import image7 from "../../assets/BlogImage/image7.jpg";

const Blogs = () => {
  return (
    <div>
      <div
        className="w-full h-[280px] sm:h-[360px] lg:h-[420px] bg-center bg-cover flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://hkangles.com/freshter/wp-content/uploads/2024/05/banner-01-bg-01.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/30"></div>

        {/* Content */}
        <div className="relative text-center text-black">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Blog Default
          </h1>

          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full text-sm font-medium shadow">
            <span className="text-gray-700">Home</span>
            <span className="text-blue-600">→</span>
            <span className="text-blue-600">Blog Default</span>
          </div>
        </div>
      </div>

      <section>
        <div className="bg-[#eef3f6] min-h-screen px-4 py-8 sm:px-8 sm:py-12 lg:px-28 lg:py-28 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-4 sm:p-6 rounded-xl flex flex-col items-center gap-10 sm:gap-16 lg:gap-20">
            {[image3, image2, image4, image5, image6].map((img, index) => (
              <div
                key={index}
                className="lg:col-span-2 bg-white rounded-2xl overflow-hidden relative min-h-162.5 sm:min-h-175 lg:h-187.5"
              >
                <img
                  src={img}
                  alt="Blog"
                  className="w-full object-cover h-65 sm:h-100 lg:h-147.5"
                />

                {/* DATE BADGE */}
                <div className="absolute bottom-4 sm:bottom-24 lg:bottom-36 left-4 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
                  📅 JUNE 28, 2023
                </div>

                <h3 className="font-bold text-[20px] pt-5 pl-5">
                  Produce Top Level Purified Bottled
                </h3>

                <p className="font-light pl-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <hr className="text-gray-200 mt-6" />

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500 mb-6 pl-5 mt-6">
                  <span className="text-blue-600">👤 ADMIN</span>
                  <span>🗂 WATER</span>
                  <span>💬 3 COMMENTS</span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-full max-w-87.5 lg:col-span-1 rounded-xl mt-6 mx-auto lg:mx-0">
            <div className="space-y-8 pl-0 sm:pl-3 w-full max-w-75 mx-auto lg:mx-0">
              {/* SEARCH */}
              <div className="bg-white rounded-2xl p-2">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                  <input
                    type="text"
                    placeholder="Search ..."
                    className="bg-transparent outline-none flex-1 text-sm"
                  />
                  🔍
                </div>
              </div>

              {/* CATEGORIES */}
              <div className="bg-white rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-center mb-4">
                  Categories
                </h2>
                <ul className="space-y-4 text-sm">
                  {["Catering", "Delivery", "Glacier", "Service", "Water"].map(
                    (item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 border-b pb-3 cursor-pointer hover:text-blue-600"
                      >
                        <span className="text-blue-500">»</span>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* RECENT POSTS */}
              <div className="bg-white rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-center mb-4">
                  Recent Posts
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      date: "FEBRUARY 18, 2024",
                      title: "Produce Top Level Purified Bottled",
                      img: image7,
                    },
                    {
                      date: "JUNE 28, 2023",
                      title: "Water Can Help You Lose Weight",
                      img: image2,
                    },
                  ].map((post, index) => (
                    <div key={index} className="flex gap-4 items-center">
                      <img
                        src={post.img}
                        alt=""
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                          {post.date}
                        </span>
                        <h4 className="text-sm font-semibold mt-2 text-black">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TAGS */}
              <div className="bg-white rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-center mb-4">Tags</h2>
                <div className="flex flex-wrap gap-3">
                  {["BOTTLED", "DRINK", "OCEAN", "RIVER", "SEA", "WATER"].map(
                    (tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-gray-100 text-sm hover:bg-blue-600 hover:text-white transition"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* OFFER CARD */}
              <div className="relative w-full h-[360px] bg-[#26377B] rounded-[30px] overflow-hidden text-white">
                <div className="absolute left-0 bottom-0 w-[55%] h-full">
                  <img
                    src={image1}
                    alt="Delivery"
                    className="h-full w-full object-cover rounded-l-[30px]"
                  />
                </div>

                <div className="absolute right-0 top-0 w-[55%] h-full flex flex-col justify-center px-6">
                  <p className="text-sm mb-1">Get</p>
                  <h2 className="text-3xl font-bold mb-1">25% Off</h2>
                  <p className="text-sm mb-5">on All Services</p>

                  <button className="bg-blue-500 hover:bg-blue-600 transition text-white py-2 rounded-full text-sm font-semibold">
                    GET IT NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
