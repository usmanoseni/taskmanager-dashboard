import React from "react";
import PropTypes from "prop-types";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; 

const listItem = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];
 

export default function Footer() { 

     return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
        <div className="text-md font-bold text-indigo-600">MyWebsite</div>
          <p className="text-sm leading-relaxed">
            Premium smoked dry catfish — hygienically processed and packaged
            to provide healthy meals for working-class individuals and families.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
             <ul className="space-y-2 text-sm">
              { listItem.map(({name,href}) => ( <li key={name}><a href={href}>{ name}</a></li>))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-400 transition">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyWebsite Enterprises Limited. All rights reserved.
      </div>
        </footer>
     )
}

export { listItem };