import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="text-xl mt-10 md:mt-20">
          <p>
            A dedicated and enthusiastic frontend developer with a strong
            passion for creating captivating user interfaces and seamless web
            experiences. My journey into web development began with a
            fascination for design and interactivity, and over the years, I have
            honed my skills in HTML, CSS, and JavaScript. With hands-on
            experience in popular frontend frameworks like React.js and Next.js,
            I take pride in my ability to transform designs and wireframes into
            responsive, pixel-perfect websites that deliver exceptional user
            experiences.
          </p>
          <br />
          <p>
            During my studies, I engaged in personal projects and online courses
            to gain hands-on experience with frontend technologies. I am
            proficient in React.js and have a keen interest in exploring other
            popular frameworks like Angular. My goal as a frontend developer is
            to combine my mathematical background with creativity to craft
            visually appealing and intuitive web interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
