import { Link } from "react-router-dom";
import { Facebook, Youtube, Linkedin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#263775] text-white">

      {/* Top Newsletter Section */}
      <div className="max-w-8xl mx-auto px-16 py-10 border-b border-white/20
                      flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">

        {/* Logo */}
        <div className="flex items-center text-2xl lg:text-3xl font-bold ml">
          <span className="text-blue-400">💧</span>
          FreshWater
        </div>

        {/* Newsletter Text */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center lg:text-left ">
          Subscribe for Newsletter
        </h2>

        {/* Input */}
        <div className="relative w-full sm:w-[420px]">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full rounded-full px-6 py-3 text-gray-800 outline-none bg-white"
          />
          <button className="absolute right-1 top-1 bottom-1 w-12 rounded-full bg-blue-500 flex items-center justify-center">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-14
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">(0) 123456789</h3>
          <p className="text-white/80 text-sm">Phone Number</p>

          <h4 className="text-lg font-semibold mt-4">Our Address</h4>
          <p className="text-white/80 text-sm">
            A-1, Envanto Headquarter
          </p>

          <h4 className="text-lg font-semibold mt-4">Mail@</h4>
          <p className="text-white/80 text-sm">
            name@yourmail.com
          </p>


          {/* Social Icons */}
          <div className="flex gap-3 pt-4">
            <Link to="#" className="w-10 h-10 rounded-full bg-white text-[#263775]
                                    flex items-center justify-center">
              <Youtube size={18} />
            </Link>
            <Link to="#" className="w-10 h-10 rounded-full bg-white text-[#263775]
                                    flex items-center justify-center">
              <Facebook size={18} />
            </Link>
            <Link to="#" className="w-10 h-10 rounded-full bg-white text-[#263775]
                                    flex items-center justify-center">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-white/80">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/pricing">Pricing Table</Link></li>
            <li><Link to="/blog">Blog Grid</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-white/80">
            <li><Link to="/services/cosmetic-dentistry">Cosmetic Dentistry</Link></li>
            <li><Link to="/services/water-dispenser">Water Dispenser</Link></li>
            <li><Link to="/services/bottled-water">Bottled Water</Link></li>
            <li><Link to="/services/water-testing">Water Testing</Link></li>
            <li><Link to="/services/system-repair">System Repair</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-white/80">
            <li><Link to="/plants">Purified Plants</Link></li>
            <li><Link to="/chlorine-free">Chlorine Free</Link></li>
            <li><Link to="/health">Fights Insomnia</Link></li>
            <li><Link to="/drinking-water">Drinking Water Plants</Link></li>
            <li><Link to="/dispenser">Water Dispenser</Link></li>
            <li><Link to="/filtration">Filtration Plants</Link></li>
          </ul>
        </div>

        {/* Empty column for spacing symmetry (matches design) */}
        <div className="hidden lg:block"></div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/20 py-6 text-center text-sm text-white/80">
        Copyright © 2024 Freshter, All Rights Reserved.
      </div>
    </footer>
  );
}
