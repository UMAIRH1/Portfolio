"use client";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaRegUser,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-bgcolor text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Contact Me</h1>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-8">
        <div className="flex flex-col items-center space-y-4">
          <FaPhoneAlt className="text-4xl" />
          <p className="text-lg">+923015156565</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <FaEnvelope className="text-4xl" />
          <p className="text-lg">umairhabib@gmail.com</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <FaMapMarkerAlt className="text-4xl" />
          <p className="text-lg">Lahore,Pakistan</p>
        </div>
      </div>
      <div className="flex space-x-6">
        <a
          href="https://linkedin.com/in/ahmadbyounas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl hover:text-gray-400 transition duration-300" />
        </a>
        <a
          href="https://github.com/ahmad292910"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl hover:text-gray-400 transition duration-300" />
        </a>
        <a
          href="https://yourportfolio.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegUser className="text-3xl hover:text-gray-400 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
