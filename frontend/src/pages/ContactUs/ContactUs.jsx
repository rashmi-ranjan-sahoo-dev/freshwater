import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const cards = [
  {
    label: "CALL NOW",
    title: "Phone Number",
    value: "(0) 123456789",
    icon: <Phone className="text-blue-600" />,
  },
  {
    label: "SEND NOW",
    title: "Our Mail",
    value: "mail@aqaota.com",
    icon: <Mail className="text-blue-600" />,
  },
  {
    label: "MEET US",
    title: "Our Address",
    value: "A-1, Envanto Headquarter, Australia",
    icon: <MapPin className="text-blue-600" />,
  },
];

const ContactUs = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div
        className="w-full h-[280px] sm:h-[360px] lg:h-[420px] bg-center bg-cover flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://hkangles.com/freshter/wp-content/uploads/2024/05/banner-01-bg-01.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/30"></div>

        <div className="relative text-center text-black">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full text-sm font-medium shadow">
            <span className="text-gray-700">Home</span>
            <span className="text-blue-600">→</span>
            <span className="text-blue-600">CONTACT US</span>
          </div>
        </div>
      </div>

      {/* ================= CONTACT CARDS SECTION ================= */}
      <section className="bg-[#eef3f6] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-sm px-8 py-10"
              >
                <p className="text-xs tracking-widest text-blue-600 font-semibold mb-5">
                  {card.label}
                </p>

                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.value}
                </p>

                {/* Floating Icon */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full shadow flex items-center justify-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAP + CONTACT FORM SECTION ================= */}
      <section className="bg-[#eef3f6] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* MAP */}
            <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=India%20Pty%20Ltd,%20Melbourne&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* FORM */}
            <div>
              <h2 className="text-3xl font-semibold mb-8">Send A Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full px-6 py-4 rounded-full bg-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email *"
                    className="w-full px-6 py-4 rounded-full bg-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Phone *"
                    className="w-full px-6 py-4 rounded-full bg-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Zipcode *"
                    className="w-full px-6 py-4 rounded-full bg-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Services *"
                  className="w-full px-6 py-4 rounded-full bg-white outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full px-6 py-4 rounded-2xl bg-white outline-none resize-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
