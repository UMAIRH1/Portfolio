// components/NavBar.jsx
"use client"; // Add this line to indicate it's a Client Component

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline"; // Correct import for Heroicons v2
import Link from "next/link"; // Import the Link component

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-customGray text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">Umair Habib</div>

      {/* Links - Hidden on small screens, shown on medium+ screens */}
      <div className="hidden md:flex space-x-20 text-lg p-4">
        {" "}
        {/* Increased spacing */}
        <Link href="#" className="hover:text-gray-400 transition duration-300">
          Home
        </Link>
        <Link href="#" className="hover:text-gray-400 transition duration-300">
          About
        </Link>
        <Link href="#" className="hover:text-gray-400 transition duration-300">
          Project
        </Link>
        <Link href="#" className="hover:text-gray-400 transition duration-300">
          Contact
        </Link>
      </div>

      {/* Menu Icon - Always shown on the right */}
      <div
        className="md:hidden ml-auto cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bars3Icon className="h-8 w-8 text-white" />
      </div>
    </nav>
  );
};

export default Nav;
