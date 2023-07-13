import React from 'react';
import chatyou from '../assets/portfolio/chatyou.PNG';
import mailbox from '../assets/portfolio/mailbox.PNG'
import navbar from '../assets/portfolio/navbar.jpg';
import pinterest from "../assets/portfolio/pinterest.PNG"
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chatyou,
    },
    {
      id: 2,
      src: pinterest,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: mailbox,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-3">Check out some of my work here</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img className="rounded-md duration-200 hover:scale-105" src={src} alt="" />
              <div className="flex items-center justify-center">
                <button className="w-full px-6 py-1 m-4 duration-200 hover:scale-105">Demo</button>
                <button className="w-full px-6 py-1 m-4 duration-200 hover:scale-105">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
