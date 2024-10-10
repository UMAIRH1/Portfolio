import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-bgcolor text-white">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 img-height relative">
        <Image
          src="/assets/images/profile.jpg"
          alt="Profile Image"
          layout="fill" // Use layout fill for better responsiveness
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col justify-center items-start -mt-28 flex-1 p-8 space-y-6">
        <div className="ml-40">
          <h1 className="text-9xl font-bold">
            My <br /> Portfolio
          </h1>
          <br />

          <p className="text-gray-400 text-justify">
            I'm Umair Habib, a Full Stack Developer with a focus on building
            dynamic web applications using Next.js, React, Node.js, and MongoDB.
            I’m passionate about creating fast, scalable solutions and enjoy
            tackling challenges with clean, efficient code. Let’s work together
            to build something innovative!
          </p>
          <br />

          <div className="flex space-x-9">
            <button
              type="button"
              className="border border-white bg-white text-black px-8 py-4 rounded-none hover:bg-white hover:text-black transition duration-300"
            >
              Explore Now
            </button>
            <button
              type="button"
              className="flex items-center space-x-2 text-white"
            >
              <span className="inline-block w-10 h-10 rounded-full border border-white flex items-center justify-center">
                ▶
              </span>
              <span>Play Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
