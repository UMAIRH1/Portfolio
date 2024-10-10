// components/Introduction.jsx
"use client"; // Required if using state or other client-specific features

const Intro = () => {
  const img = ["/assets/images/info.jpg"];
  return (
    <section className="flex w-full  flex-col md:flex-row items-center bg-bgcolor justify-between ">
      <div className="flex-1 mb-4 md:mb-0 ml-10 text-center md:text-center">
        <h1 className="text-4xl font-bold text-white  flex-1 p-8 space-y-3">
          Introduction
        </h1>

        <p className="text-lg text-white text-justify  flex-1 p-8 space-y-5">
          Hello! I'm Umair Habib, a passionate Full Stack Developer. I
          specialize in building robust web applications from the ground up,
          combining a strong foundation in front-end and back-end technologies
          to deliver seamless, high-performance solutions. With a background in
          software engineering, I have experience working with technologies like
          JavaScript, React, Node.js, Express, Next.js, and MongoDB. I thrive in
          dynamic environments and love collaborating with teams to turn complex
          problems into elegant, user-friendly solutions. I’m driven by a
          passion for continuous learning and exploring new technologies, and
          I’m always eager to take on new challenges and grow my skill set. When
          I’m not coding, I enjoy contributing to open-source projects,
          experimenting with new tools, and staying up-to-date with the latest
          industry trends. Let’s build something amazing together!
        </p>
      </div>

      <div className="flex-1 flex justify-center round-xl  m-40">
        {img.map((src, index) => (
          <img
            key={index}
            src={src}
            height={600}
            width={800}
            alt={`Slide ${index}`}
            className="object-cover w-full h-[200px] sm:h-1 md:h-[400px] lg:h-[500px] xl:h-[600px] round-xl"
          />
        ))}
      </div>
    </section>
  );
};

export default Intro;
