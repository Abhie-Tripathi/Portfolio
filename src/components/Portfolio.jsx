import React from 'react';
import chatyou from '../assets/portfolio/chatyou.PNG';
import mailbox from '../assets/portfolio/mailbox.PNG'
import disney from "../assets/portfolio/disney.PNG"
import pinterest from "../assets/portfolio/pinterest.PNG"
import genericstore from "../assets/portfolio/genericstore.PNG"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chatyou,
      demo: "https://chatyou-78472.web.app",
      code: "https://github.com/Abhie-Tripathi/ChatYou"
    },
    {
      id: 2,
      src: pinterest,
      demo: "https://pinyourinterest.netlify.app",
      code: "https://github.com/Abhie-Tripathi/pinterest"
    },
    {
      id: 3,
      src: disney,
      demo: "https://redisney.netlify.app",
      code: "https://github.com/Abhie-Tripathi/disney"
    },
    {
      id: 4,
      src: mailbox,
      demo: "https://maiilbox.netlify.app",
      code: "https://github.com/Abhie-Tripathi/mail-box"
    },
    {
      id: 5,
      src: genericstore,
      demo: "https://genericstore.netlify.app",
      code: "https://github.com/Abhie-Tripathi/E-Commerce"
    }
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-3">Check out some of my work here</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img className="rounded-md duration-200 hover:scale-105" src={src} alt="" />
              <div className="flex items-center justify-center">
                <a href={demo} target='_blank' rel="noreferrer"><button className="w-full px-6 py-1 m-4 duration-200 hover:scale-105">Demo</button></a>
                <a href={code} target='_blank' rel="noreferrer"><button className="w-full px-6 py-1 m-4 duration-200 hover:scale-105">Code</button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
