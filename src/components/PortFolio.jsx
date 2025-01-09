import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      desc: "MongoDB is a source-available, cross-platform, document-oriented database program.",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      desc: "Express is a node js web application framework that provides broad features for building web and mobile applications.",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      desc: "React is a popular JavaScript library for building fast, efficient, and scalable user interfaces using a component-based architecture Single Page Applications (SPAs) and Virtual DOM.",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      desc: "Node.js is an open source server environment. Node.js allows you to run JavaScript on the server.",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
      desc: "Python is a general-purpose programming language often used to build websites and software, automate tasks, and conduct data analysis.",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
      desc: "Java is used for developing desktop applications, system software, server applications, and software tools.",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-5">
          {cardItem.map(({ id, logo, name, desc }) => (
            <div
              className="flex flex-col justify-between md:w-[300px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <div>
                <img
                  src={logo}
                  className="w-[120px] h-[120px] mx-auto mb-4 rounded-full border-[2px]"
                  alt={name}
                />
                <div className="text-center font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm text-center mb-4">{desc}</p>
              </div>
              <div className="flex justify-center gap-3 mt-auto">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
