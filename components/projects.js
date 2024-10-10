"use client";

import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Medicare",
      description: "A brief description of project one...",
      github: "https://github.com/yourusername/project-one",
      image: "/assets/images/project1.jpg",
    },
    {
      title: "Profolio",
      description: "A brief description of project two...",
      github: "https://github.com/yourusername/project-two",
      image: "/assets/images/project2.jpg",
    },
    {
      title: "Fabulous",
      description: "A brief description of project three...",
      github: "https://github.com/yourusername/project-three",
      image: "/assets/images/project3.jpg",
    },
    {
      title: "Transglobal",
      description: "A brief description of project four...",
      github: "https://github.com/yourusername/project-four",
      image: "/assets/images/project4.jpg",
    },
  ];

  return (
    <div className="bg-bgcolor text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-customGray p-4 rounded-lg shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-lg mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
