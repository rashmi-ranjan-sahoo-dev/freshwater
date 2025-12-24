import React from "react";

import image1 from "../../assets/AboutUs-Image/image11.png"
import image6 from "../../assets/AboutUs-Image/image16.jpg";
import image2 from "../../assets/AboutUs-Image/image12.png";
import image7 from "../../assets/AboutUs-Image/image17.jpg";
import image3 from "../../assets/AboutUs-Image/image13.jpg";
import image4 from "../../assets/AboutUs-Image/image14.jpg";
import image5 from "../../assets/AboutUs-Image/image15.jpg";
import {
  Phone,
  Beaker,
  Droplet,
  Moon,
  ShieldPlus,
  Utensils,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const AboutUs = () => {
  return (
    <>
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
            About Us
          </h1>

          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full text-sm font-medium shadow">
            <span className="text-gray-700">Home</span>
            <span className="text-blue-600">→</span>
            <span className="text-blue-600">ABOUT US</span>
          </div>
        </div>
      </div>
      <div className="bg-[#eef3f6] py-20 px-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <span className="inline-block mb-6 px-6 py-2 text-sm font-semibold text-blue-600 bg-white rounded-full">
              ABOUT US
            </span>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-10">
              High Standard & Quality <br /> Products
            </h2>

            {/* Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-sm leading-relaxed">
              <p>
                <span className="text-4xl font-bold text-gray-900 float-left mr-2 leading-none">
                  V
                </span>
                ero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis prae sentium voluptatum deleniti.
              </p>

              <p>
                Similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem.
              </p>

              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime.
              </p>

              <p>
                Omnis dolor repellendus. Temporibus autem quibusdam et aut
                officiis debitis aut rerum necessitatibus saepe.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-6 mt-10">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition">
                READ MORE
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
                  📞
                </div>
                <span className="font-semibold text-gray-900">
                  (0) 123 456 789
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <img src={image1} alt="Water Bottle" className="max-w-md w-full" />
          </div>
        </div>
      </div>

      {/*------------------------------ testinomial section------------------- */}
      <section className="w-full bg-[#eef3f8] py-16 px-4">
        <div
          className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden"
          style={{
            backgroundImage:
              "url('https://hkangles.com/freshter/wp-content/uploads/2024/05/banner-01-bg-01.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-indigo-900/80"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center text-white px-6 py-20">
            {/* Quote Icon */}
            <div className="text-6xl mb-6">“</div>

            {/* Text */}
            <p className="max-w-4xl text-lg md:text-xl italic leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi.
            </p>

            {/* Profile */}
            <div className="mt-10 flex flex-col items-center">
              <img
                src={image6}
                alt="John Doerr"
                className="w-20 h-20 rounded-full border-4 border-white object-cover"
              />
              <h4 className="mt-4 text-xl font-semibold">John Doerr</h4>
              <span className="text-sm tracking-widest text-gray-300">
                MANAGER
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------Why choose us------------------------ */}
      <section className="bg-[#f2f7fa] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Top Badge */}
          <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold text-blue-600 bg-white rounded-full shadow">
            WHY CHOOSE US
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            High Quality Products
          </h2>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Left Features */}
            <div className="space-y-12 text-left">
              {[
                {
                  icon: <Beaker />,
                  title: "Testing Labs",
                },
                {
                  icon: <Droplet />,
                  title: "Relieves Pain",
                },
                {
                  icon: <Moon />,
                  title: "Fights Insomnia",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow">
                    {React.cloneElement(item.icon, {
                      className: "text-blue-600 w-6 h-6",
                    })}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mt-1">
                      At vero eos et accusamus et iusto odio ducimus qui
                      deleniti atque.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <img
                src={image2}
                alt="Glass of Water"
                className="max-h-[420px] object-contain"
              />
            </div>

            {/* Right Features */}
            <div className="space-y-12 text-left">
              {[
                {
                  icon: <ShieldPlus />,
                  title: "Chronic Insomnia",
                },
                {
                  icon: <Moon />,
                  title: "Fights Insomnia",
                },
                {
                  icon: <Utensils />,
                  title: "Increases Appetite",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow">
                    {React.cloneElement(item.icon, {
                      className: "text-blue-600 w-6 h-6",
                    })}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mt-1">
                      At vero eos et accusamus et iusto odio ducimus qui
                      deleniti atque.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*----------------------------- OUR PROCESSES-----------------------  */}
      <section className="bg-[#f2f7fa] py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold text-blue-600 bg-white rounded-full shadow">
              OUR PROCESS
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              We Provide Quality Water Delivery
            </h2>

            {/* Description */}
            <p className="text-gray-600 max-w-xl mb-10">
              Vero eos et accusamus et iusto odio dignissimos ducimus, qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>

            {/* Steps */}
            <div className="space-y-10 relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 h-full w-[2px] bg-blue-100"></div>

              {[
                {
                  step: "01",
                  title: "Most effective way",
                },
                {
                  step: "02",
                  title: "Dissolved Substances Removed",
                },
                {
                  step: "03",
                  title: "Dissolved Substances Removed",
                },
              ].map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Step Number */}
                  <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold z-10">
                    {item.step}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mt-1 max-w-md">
                      Nam libero tempore, cum soluta nobis est eligendi optio,
                      cumque nihil impedit.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                backgroundImage: { image7 },
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0   rounded-3xl"></div>

            {/* Form Card */}
            <div className="relative bg-white rounded-3xl p-10 max-w-md mx-auto shadow-xl">
              <h3 className="text-3xl font-bold text-center mb-8">
                Book your Water
              </h3>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full px-6 py-4 rounded-full bg-gray-100 focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email Address *"
                  className="w-full px-6 py-4 rounded-full bg-gray-100 focus:outline-none"
                />

                <select className="w-full px-6 py-4 rounded-full bg-gray-100 focus:outline-none">
                  <option>Select Water Type</option>
                  <option>Type 2</option>
                  <option>Type 3</option>
                </select>

                <select className="w-full px-6 py-4 rounded-full bg-gray-100 focus:outline-none">
                  <option>Select Bottles</option>
                  <option>Type 2</option>
                  <option>Type 3</option>
                </select>

                <button
                  type="submit"
                  className="w-[150px] bg-blue-600 text-white py-4 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f7fa] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold text-blue-600 bg-white rounded-full shadow">
            EXPLORE NEWS WITH US
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            Latest News & Article
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="relative">
                <img
                  src={image3}
                  alt="Produce Top Level Purified Bottled"
                  className="w-full h-56 object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
                  FEBRUARY 18, 2024
                </span>
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow hover:bg-blue-600 text-gray-700  hover:text-white">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Produce Top Level Purified Bottled
                </h3>
                <hr className="text-gray-300" />
                <div className="flex items-center justify-between pt-4">
                  <span className="px-4 py-1 text-xs font-semibold bg-gray-100 rounded-full">
                    GLACIER
                  </span>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MessageCircle className="w-4 h-4" />0
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="relative">
                <img
                  src={image4}
                  alt="Water Can Help You Lose Weight"
                  className="w-full h-56 object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
                  JUNE 28,2023
                </span>
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-white  hover:bg-blue-600 text-gray-700  hover:text-white rounded-full flex items-center justify-center shadow">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Water Can Help You Lose Weight
                </h3>
                <hr className="text-gray-300" />
                <div className="flex items-center justify-between  pt-4">
                  <span className="px-4 py-1 text-xs font-semibold bg-gray-100 rounded-full">
                    CATERING
                  </span>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MessageCircle className="w-4 h-4" />2
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="relative">
                <img
                  src={image5}
                  alt="Why do we need to drink water"
                  className="w-full h-56 object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
                  JUNE 28,2023
                </span>
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow hover:bg-blue-600 text-gray-700  hover:text-white">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why do we need to drink water
                </h3>
                <hr className="text-gray-300" />
                <div className="flex items-center justify-between pt-4">
                  <span className="px-4 py-1 text-xs font-semibold bg-gray-100 rounded-full">
                    WATER
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MessageCircle className="w-4 h-4" />3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
