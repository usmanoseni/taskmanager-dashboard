import React, { useState, useContext } from "react"; 
import PropTypes from "prop-types";
import Button from "./button.jsx";
import { listItem } from "./Footer.jsx";
import { Menu, X, Moon, Sun } from "lucide-react";
import { ThemeContext } from "./ThemeContext.jsx";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext);
  const toggleMenu = () => setIsOpen((prev) => !prev);
 
  return (
  <nav className="bg-white dark:bg-slate-800 w-full z-20 h-14 shadow-sm flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">


      <div className="text-md font-bold text-indigo-600 dark:text-indigo-400">MyWebsite</div>
      <div className="hidden md:flex space-x-6 text-sm">
        {listItem.map(({ name, href }) => (
          <a className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition"key={name}href={href} >
            {name}
          </a>
        ))}
      </div>

      <div className="hidden md:flex justify-center items-center gap-4 text-xs font-medium">
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <Button variant="primary" size="xs">Sign Up</Button>
        <button className="border-2 border-indigo-600 px-5 py-1.5 rounded-full hover:cursor-pointer hover:bg-indigo-600 hover:text-white">
          Get Started
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="md:hidden text-sm absolute top-12 w-32 right-2 rounded-sm bg-white dark:bg-slate-700 shadow-md">
            {listItem.map(({ name, href }) => (
              <a onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-slate-600 hover:text-indigo-600" key={name} href={href} >
                {name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
