"use client"; 
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  

  return (
    <nav className="bg-black/90 backdrop-blur-sm sticky top-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
       
        <Link href="/" className="text-2xl font-bold text-teal-400">
          DEV_ARCHITECT
        </Link>

       
        <ul className="hidden md:flex gap-8 text-gray-300 text-sm uppercase tracking-wide">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-teal-400 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

       
        <Link
          href="/mycv"
          className="hidden md:inline-block bg-teal-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-teal-300 transition-colors"
        >
          See My Cv
        </Link>

       
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-gray-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          {/* Added "See My Cv" button to mobile menu - was completely hidden on mobile due to hidden md:inline-block class */}
          <li>
            <Link
              href="/mycv"
              onClick={() => setIsOpen(false)}
              className="inline-block bg-teal-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-teal-300 transition-colors text-center"
            >
              See My Cv
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;