/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import {Droplet, ShieldCheck,  Filter,  HeartPulse, Recycle,Truck,} from "lucide-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Natural & Pure",
    subtitle: "Drinking Water",
    badge: "MINERAL COMPOSITION",
    image: "https://hkangles.com/freshter/wp-content/uploads/2024/06/slide2-01.png",
  },
  {
    id: 2,
    title: "Pure & Healthy",
    subtitle: "Drinking Water",
    badge: "MINERAL COMPOSITION",
    image: "https://hkangles.com/freshter/wp-content/uploads/2024/06/bottel3.png",
  },
];

const services = [
  {
    id: 1,
    tag: "DELIVERY",
    title: "Water Dispenser",
    image: "https://hkangles.com/freshter/wp-content/uploads/2024/05/services-img06-200x200.jpg",
  },
  {
    id: 2,
    tag: "CATERING",
    title: "Drinking Water",
    image: "https://hkangles.com/freshter/wp-content/uploads/2024/05/services-img02-200x200.jpg",
  },
  {
    id: 3,
    tag: "GLACIER",
    title: "Cosmetic Dentistry",
    image: "https://hkangles.com/freshter/wp-content/uploads/2024/05/services-img03-200x200.jpg",
  },
  {
    id: 4,
    tag: "WATER",
    title: "Water Dispenser",
    image: "https://hkangles.com/freshter/wp-content/uploads/2024/05/services-img01-200x200.jpg",
  },
];

// duplicate for seamless infinite scroll
const marqueeItems = [...services, ...services];

const minerals = [
  { label: "Calcium+", top: "18%" },
  { label: "Magnesium", top: "32%" },
  { label: "Sodium", top: "55%" },
  { label: "Chlorine", top: "72%" },
];

const products = [
  {
    id: 1,
    title: "Water Bottle 5L",
    price: "$59.99",
    img: "https://hkangles.com/freshter/wp-content/uploads/2019/01/product-img04-600x600.jpg",
  },
  {
    id: 2,
    title: "Water Bottle 19L",
    price: "$18.00",
    img: "https://hkangles.com/freshter/wp-content/uploads/2019/01/product-img03-600x600.jpg",
  },
  {
    id: 3,
    title: "Pure Water",
    price: "$39.99",
    img: "https://hkangles.com/freshter/wp-content/uploads/2019/01/product-img02-600x600.jpg",
  },
  {
    id: 4,
    title: "Mineral Water",
    price: "$18.00",
    img: "https://hkangles.com/freshter/wp-content/uploads/2019/01/product-img01-600x600.jpg",
  },
];

const featuresLeft = [
  {
    icon: Droplet,
    title: "Maximum Purity",
    desc: "Nam libero tempore, cum soluta nobis est eligendi optio.",
  },
  {
    icon: ShieldCheck,
    title: "Chlorine Free",
    desc: "Nam libero tempore, cum soluta nobis est eligendi optio.",
  },
  {
    icon: Filter,
    title: "5 Steps Filtration",
    desc: "Nam libero tempore, cum soluta nobis est eligendi optio.",
  },
];

const featuresRight = [
  {
    icon: HeartPulse,
    title: "Healthy Water",
    desc: "Nam libero tempore, cum soluta nobis est eligendi optio.",
  },
  {
    icon: Recycle,
    title: "Sustainable Bottles",
    desc: "Nam libero tempore, cum soluta nobis est eligendi optio.",
  },
  {
    icon: Truck,
    title: "Convenient Delivery",
    desc: "Nam libero tempore, cum soluta nobis est eligendi optio.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const testimonials = [
  {
    name: "John Doerr",
    role: "MANAGER",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
  },
  {
    name: "Jancy",
    role: "ADVERTISER",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
  },
  {
    name: "Maria Jackson",
    role: "CHAIRMAN",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
};

const blogs = [
  {
    id: 1,
    category: "Glacier",
    date: "February 18, 2024",
    comments: "0 Comments",
    title: "Produce Top Level Purified Bottled",
    image:
      "https://hkangles.com/freshter/wp-content/uploads/2024/05/blog-img01-600x600.jpg",
  },
  {
    id: 2,
    category: "Catering",
    date: "June 28, 2023",
    comments: "2 Comments",
    title: "Water Can Help You Lose Weight",
    image:
      "https://hkangles.com/freshter/wp-content/uploads/2024/05/blog-img02-600x600.jpg",
  },
  {
    id: 3,
    category: "Water",
    date: "June 28, 2023",
    comments: "3 Comments",
    title: "Why do we need to drink water",
    image:
      "https://hkangles.com/freshter/wp-content/uploads/2024/05/blog-img03-600x600.jpg",
  },
  {
    id: 4,
    category: "Service",
    date: "June 28, 2023",
    comments: "3 Comments",
    title: "Fast facts on drinking water",
    image:
      "https://hkangles.com/freshter/wp-content/uploads/2024/05/blog-img04-600x600.jpg",
  },
  {
    id: 5,
    category: "Delivery",
    date: "June 28, 2023",
    comments: "4 Comments",
    title: "Water covers 71% of the Earth.",
    image:
      "https://hkangles.com/freshter/wp-content/uploads/2024/05/blog-img05-600x600.jpg",
  },
  {
    id: 6,
    category: "Glacier",
    date: "June 21, 2023",
    comments: "0 Comments",
    title: "Water Can Help You Lose Weight",
    image:
      "https://hkangles.com/freshter/wp-content/uploads/2023/06/blog-img06-1-600x600.jpg",
  },
];


const Home = () => {
  const [index, setIndex] = useState(0);
  const [[testimonialIndex, direction], setTestimonialIndex] = useState([0, 0]);

    const paginateTestimonial = (newDirection) => {
     setTestimonialIndex([
       (testimonialIndex + newDirection + testimonials.length) % testimonials.length,
       newDirection,
     ]);
   };


  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section
        className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat overflow-hidden pt-20"
        style={{
          backgroundImage:
            "url('https://hkangles.com/freshter/wp-content/uploads/2024/05/banner-01-bg-01.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-600/20"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 h-full"
          >
            <div className="max-w-7xl mx-auto px-6 h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

              {/* Left Content */}
              <div className="text-center lg:text-left text-white">
                <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold bg-white text-blue-600 rounded-full">
                  {slides[index].badge}
                </span>

                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                  {slides[index].title}
                  <br />
                  {slides[index].subtitle}
                </h1>

                <div className="mt-8 flex flex-row gap-4 justify-center lg:justify-start">
                  <button className="px-4 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition w-fit ">
                    <Link to={"/about"}> About Us</Link>
                  </button>
                  <button className="px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition w-fit">
                    <Link to={"/contact"}> Contact Us</Link>
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <motion.img
                src={slides[index].image}
                alt="Water Bottle"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className=" w-[80px] md:max-w-md lg:w-[300px]  mx-auto"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="w-full bg-[#f1f6f9] py-20  overflow-hidden">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-6 py-2 mb-4 text-sm font-semibold text-blue-600 bg-white rounded-full">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Service we Provided
          </h2>
        </div>

        {/* Marquee */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[300px] lg:min-w-[340px] bg-white rounded-3xl p-6 shadow-sm relative"
            >
              {/* Image */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">
                {item.tag}
              </p>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-blue-600 hover:text-white transition">
                ↗
              </div>
            </div>
          ))}
        </motion.div>
      </section>

       <section className="w-full bg-[#f1f6f9] py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <img
            src="https://hkangles.com/freshter/wp-content/uploads/2024/05/about-img01.png"
            alt="Water Bottle"
            className="w-[360px] sm:w-[320px] lg:w-[380px]"
          />

          {/* Mineral Lines (hidden on mobile) */}
          <div className="sm:pl-0  absolute inset-0 md:absolute md:left-64 lg:left-20">
            {minerals.map((item, index) => (
              <div
                key={index}
                className="absolute left-[-160px] flex items-center"
                style={{ top: item.top }}
              >
                <span className="text-gray-800 font-medium">
                  {item.label}
                </span>
                <div className="w-10 md:w-28 h-[1px] bg-gray-400"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold text-blue-600 bg-white rounded-full">
            ABOUT US
          </span>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We Provide Quality Water Delivery
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut rerum.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Read More
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow">
                <Phone className="text-blue-600" />
              </div>
              <span className="font-semibold text-gray-900">
                (0) 123 456 789
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>

      <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">

      {/* Background Video */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <source
          src="https://hkangles.com/freshter/wp-content/themes/aqoato/assets/images/water-video.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 flex items-center justify-center h-full px-6"
      >
        <div className="max-w-3xl text-center text-white">
          <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold bg-white/20 rounded-full backdrop-blur">
            PURE & NATURAL
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Fresh & Healthy <br /> Drinking Water
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8">
            We deliver clean, safe, and mineral-rich water directly to your home
            with care and quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
              Learn More
            </button>
            <button className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>
      </motion.div>
    </section>

     <section className="w-full bg-[#f3f8fb] py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="inline-block px-6 py-2 rounded-full bg-white text-blue-600 font-medium mb-4">
          OUR PRODUCTS
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">
          WaterProduct & Gallery
        </h2>
      </div>

      {/* Infinite Scroll */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["-30%", "0%"] }}   // LEFT ➜ RIGHT
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...products, ...products].map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] md:min-w-[300px] bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition"
            >
              <div className="bg-[#f3f8fb] rounded-xl p-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-contain"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-blue-600 font-bold mt-1">
                {item.price}
              </p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition">
                ADD TO CART
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* LEFT FEATURES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-8"
          >
            {featuresLeft.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://hkangles.com/freshter/wp-content/uploads/2024/05/Untitled-5.png"
              alt="Water Bottle"
              className="max-w-[260px] sm:max-w-[320px] lg:max-w-[360px]"
            />
          </motion.div>

          {/* RIGHT FEATURES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-8"
          >
            {featuresRight.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariantsRight}
                className="flex items-start gap-4"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>

    <section className="py-20 bg-[#f2f7fa] overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 text-center">

    {/* Heading */}
    <span className="inline-block px-6 py-2 mb-4 text-sm font-semibold text-blue-600 bg-white rounded-full">
      TESTIMONIALS
    </span>

    <h2 className="text-3xl md:text-4xl font-bold mb-14">
      What Our Client Say
    </h2>

    {/* Slider */}
    <div className="relative max-w-4xl mx-auto overflow-hidden">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={testimonialIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-10 text-left shadow-md"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className={
                  i < testimonials[testimonialIndex].rating
                    ? "fill-orange-400 text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          {/* Text */}
          <p className="text-gray-700 italic leading-relaxed mb-8">
            {testimonials[testimonialIndex].text}
          </p>

          {/* User */}
          <div className="flex items-center gap-4">
            <img
              src={testimonials[testimonialIndex].image}
              alt={testimonials[testimonialIndex].name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-lg">
                {testimonials[testimonialIndex].name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonials[testimonialIndex].role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Bottom Buttons */}
    <div className="flex justify-center gap-6 mt-10">
      <button
        onClick={() => paginateTestimonial(-1)}
        className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow hover:bg-blue-600 hover:text-white transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => paginateTestimonial(1)}
        className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow hover:bg-blue-600 hover:text-white transition"
      >
        <ChevronRight />
      </button>
    </div>

  </div>
     </section>

    <section className="w-full bg-[#f2f7fa] py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="inline-block px-6 py-2 mb-4 rounded-full bg-white text-blue-600 font-semibold text-sm">
        OUR PROCESS
      </span>

      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-6">
        We Provide Quality Water Delivery
      </h2>

      <p className="text-gray-600 mb-10 max-w-xl">
        Vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis
        praesentium voluptatum deleniti atque corrupti.
      </p>

      {/* STEPS */}
      <div className="space-y-10 relative">
        {[
          {
            step: "01",
            title: "Most effective way",
            desc: "Nam libero tempore, cum soluta nobis est eligendi optio.",
          },
          {
            step: "02",
            title: "Dissolved Substances Removed",
            desc: "Nam libero tempore, cum soluta nobis est eligendi optio.",
          },
          {
            step: "03",
            title: "Purification & Delivery",
            desc: "Nam libero tempore, cum soluta nobis est eligendi optio.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex items-start gap-6"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              {item.step}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* RIGHT FORM */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 max-w-lg mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Book your Water
        </h3>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name *"
            className="w-full px-6 py-4 rounded-full bg-[#f2f7fa] outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email Address *"
            className="w-full px-6 py-4 rounded-full bg-[#f2f7fa] outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select className="w-full px-6 py-4 rounded-full bg-[#f2f7fa] outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select Water Type</option>
            <option>Mineral Water</option>
            <option>Pure Water</option>
            <option>RO Water</option>
          </select>

          <select className="w-full px-6 py-4 rounded-full bg-[#f2f7fa] outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select Bottles</option>
            <option>5 Liters</option>
            <option>10 Liters</option>
            <option>20 Liters</option>
          </select>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
          >
            SUBMIT NOW
          </button>
        </form>
      </div>
    </motion.div>

  </div>
   </section>

    
  <section className="bg-[#f2f7fa] py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-6 py-2 bg-white rounded-full text-blue-600 font-semibold">
            OUR BLOG
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold">
            Latest posts & articles
          </h2>
        </motion.div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start border-b pb-8"
            >
              {/* IMAGE */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover"
              />

              {/* CONTENT */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
                  <span className="px-4 py-1 bg-white rounded-full font-semibold text-gray-700">
                    {blog.category}
                  </span>
                  <span className="text-gray-500">{blog.date}</span>
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-500">{blog.comments}</span>
                </div>

                <h3 className="text-lg md:text-xl font-semibold hover:text-blue-600 transition cursor-pointer">
                  {blog.title}
                </h3>
              </div>

              {/* ICON */}
              <div className="hidden sm:flex">
                <ArrowUpRight className="w-6 h-6 text-gray-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default Home;
