"use client"; // Add this directive at the top

import { useState } from "react";
import Image from "next/image";

const About = () => {
  const images = [
    "/assets/images/about1.jpg",
    "/assets/images/about2.jpg",
    "/assets/images/about3.jpg",
  ];

  const image = [
    "/assets/images/p1.jpg",
    "/assets/images/p2.jpg",
    "/assets/images/93.jpg",
    "/assets/images/p4.jpg",
  ];
  const visionImages = [
    { src: "/assets/images/vision1.jpg", alt: "Vision 1" },
    { src: "/assets/images/vision2.jpg", alt: "Vision 2" },
  ];
  return (
    <div className="bg-bgcolor text-white">
      {/* Image Slideshow */}
      <div className="relative overflow-hidden w-full h-48 md:h-64 lg:h-80 flex justify-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            height={200}
            width={600}
            alt={`Slide ${index}`}
            className="object-cover w-full h-full"
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row">
        {/* About Heading */}
        <h2 className="text-center text-white text-4xl md:text-5xl lg:text-6xl font-bold mt-8 md:mt-12 px-4 md:px-20">
          About
        </h2>

        {/* Vision and Mission Sections */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between p-4 md:p-8 mx-4 md:mx-20 text-white">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-base md:text-xl">
              My vision is to become a versatile full-stack developer,
              continuously improving my skills in modern technologies and
              contributing to innovative projects that make a positive impact. I
              aim to excel in both frontend and backend development while
              building efficient, user-friendly applications.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-base md:text-xl">
              My mission is to leverage my software engineering background and
              passion for learning to create solutions that enhance user
              experience and drive business success. I am committed to staying
              updated with industry trends, embracing new challenges, and
              working collaboratively to deliver high-quality software.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br /> <br />
      <br />
      <div className="flex flex-col  md:flex-row">
        {visionImages.map((image, index) => (
          <div key={index} className="p-4 w-full md:w-1/4">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={image.src}
                width={200}
                height={150}
                layout="responsive"
                alt={image.alt}
                className="rounded-xl"
              />
            </div>
          </div>
        ))}

        <div className="text-white mr-4 pl-4 md:pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mt-8">Vision</h1>
          <div className="flex flex-col md:pt-20">
            <h1 className="text-3xl md:text-4xl">01.</h1>
            <p className="text-base md:text-xl max-w-prose text-justify">
              I envision a future where technology serves as a powerful tool to
              bring people together, solve real-world problems, and create
              meaningful experiences. As a software engineer, I aim to develop
              applications and systems that are innovative, efficient, and
              accessible to all. My goal is to continuously push the boundaries
              of what's possible in software development, contributing to
              projects that have a lasting positive impact on businesses and
              communities.
            </p>
          </div>

          <div className="flex flex-col md:pt-20">
            <h1 className="text-3xl md:text-4xl">02.</h1>
            <p className="text-base md:text-xl max-w-prose text-justify">
              At the heart of my vision is a commitment to growth and learning.
              I believe in staying at the cutting edge of technology while
              cultivating a strong foundation in core development principles. I
              aspire to be a leader in my field, recognized for creating
              software that is not only technically robust but also enhances the
              user experience in meaningful ways. Through collaboration,
              creativity, and a passion for excellence, I aim to shape a future
              where technology empowers individuals and drives progress.
            </p>
          </div>
        </div>
      </div>
      {/* Mission*/}
      <div className="flex flex-col md:flex-row mt-8 md:mt-44 px-4 md:px-20">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold">Mission</h1>

          <div className="flex flex-col md:pt-20">
            <h1 className="text-2xl md:text-4xl">01.</h1>
            <p className="text-base md:text-xl max-w-prose text-justify">
              I aspire to be a software engineer who creates meaningful
              solutions that make technology accessible and beneficial to all.
              By leveraging innovation and creativity, I aim to develop
              applications that solve real-world problems and enhance daily life{" "}
            </p>
          </div>
          <div className="flex flex-col md:pt-20">
            <h1 className="text-2xl md:text-4xl">02.</h1>
            <p className="text-base md:text-xl max-w-prose text-justify">
              My vision is to continuously learn and grow, staying ahead of
              technological trends to build cutting-edge software. I am
              committed to developing solutions that are not only functional but
              also user-friendly and impactful.{" "}
            </p>
          </div>
          <div className="flex flex-col md:pt-20">
            <h1 className="text-2xl md:text-4xl">03.</h1>
            <p className="text-base md:text-xl max-w-prose text-justify">
              I seek to lead in software development by focusing on quality,
              usability, and scalability. My goal is to craft software that
              stands the test of time, providing value to users and businesses
              alike.
            </p>
          </div>
          <div className="flex flex-col md:pt-20">
            <h1 className="text-2xl md:text-4xl">04.</h1>
            <p className="text-base md:text-xl max-w-prose text-justify">
              Driven by a passion for technology, I envision a career where my
              work makes a difference. I aim to contribute to projects that
              bring people together, improve efficiency, and promote a more
              connected world.{" "}
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-1/2 px-4 md:px-8">
          <div className="grid grid-cols-2 gap-4">
            {image.map((src, index) => (
              <div key={index} className="w-full h-auto overflow-hidden">
                <img
                  src={src}
                  alt={`Image ${index}`}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
